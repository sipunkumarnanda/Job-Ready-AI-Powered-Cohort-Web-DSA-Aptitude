import { Server } from "socket.io";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { generateResponse, generateVectors } from "../services/ai.service.js";
import messageModel from "../models/message.model.js";
import { createMemory, queryMemory } from "../services/vector.service.js";

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {
    cors : {
     origin: "http://localhost:5173",
     allowedHeaders : ["Content-Type", "Authorization"],
     credentials : true
    }
  });

  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      next(new Error("Authentication error : No token provided"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRETE);

      const user = await userModel.findById(decoded.id);

      socket.user = user;
      next();
    } catch (error) {
      next(new Error("Authentication error : Invalid token"));
    }
  });

  io.on("connection", (socket) => {
    console.log("A user is connected:", socket.user?._id);
    socket.on("ai-message", async (messagePayload) => {
      // console.log(messagePayload)
      try {
        if (!messagePayload?.chatId || !messagePayload?.content) {
          socket.emit("ai-response", {
            error: "chatId and contenta are required",
          });
          return; // stop execution here
        }

        const [message, vectors] = await Promise.all([
          messageModel.create({
            chatId: messagePayload.chatId,
            userId: socket.user._id,
            content: messagePayload.content,
            role: "user",
          }),
          // Generate vectors
          generateVectors(messagePayload.content),
        ]);

    //  console.log(vectors)

        // save on pinecone  // use await becasue it depnds on vectoes
        await createMemory({
          vectors: vectors,
          messageId: message._id,
          metadata: {
            chat: messagePayload.chatId,
            user: socket.user._id,
            text: messagePayload.content,
          },
        });

        // console.log(message);
        // console.log(vectors);

        const [memory, chatHistory] = await Promise.all([
          // old messages from pinecone / vectors
          queryMemory({
            queryVector: vectors,
            limit: 3,
            metadata: {
              user: socket.user._id,
            },
          }),

          (
            await messageModel
              .find({
                chatId: messagePayload.chatId,
              })
              .sort({ createdAt: -1 })
              .limit(20)
              .lean()
          ).reverse(),
        ]);

        // short term memory
        const stm = chatHistory.map((item) => {
          return {
            role: item.role,
            parts: [{ text: item.content }],
          };
        });

        // long term memory
        const ltm = [
          {
            role: "user",
            parts: [
              {
                text: `
                these are some previous messages from the chat, use them to generate a response
                ${memory.map((item) => item.metadata.text).join("\n")}
                `,
              },
            ],
          },
        ];

        // console.log("LTM : ",ltm[0]);
        // console.log("STM : ",stm[0]);

        // feed data to ai / structure for STM (short term memory)
        const response = await generateResponse([...ltm, ...stm]);

        // emit ai response
        socket.emit("ai-response", {
          chatId: messagePayload.chatId,
          content: response,
        });

        // Execute responseMessage creation and responseVector generation in parallel
        const [responseMessage, responseVectors] = await Promise.all([
          messageModel.create({
            chatId: messagePayload.chatId,
            userId: socket.user._id,
            content: response,
            role: "model",
          }),
          generateVectors(response),
        ]);

        // save Response on pinecone / vector DB
        await createMemory({
          vectors: responseVectors,
          messageId: responseMessage._id,
          metadata: {
            chat: messagePayload.chatId,
            user: socket.user._id,
            text: response,
          },
        });
      } catch (error) {
        console.log(error);
        socket.emit("ai-response", {
          error: "Something went wrong on the server",
          error,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("A user is disconnected");
    });
  });
}

export default initSocketServer;
