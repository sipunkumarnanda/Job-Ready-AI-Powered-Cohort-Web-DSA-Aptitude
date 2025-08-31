import { Server } from "socket.io";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import {generateResponse, generateVectors} from "../services/ai.service.js";
import messageModel from "../models/message.model.js";
import { createMemory, queryMemory } from "../services/vector.service.js";

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

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
    socket.on("ai-message", async (messagePayload) => {
      // console.log(messagePayload);

      try {

        if (!messagePayload?.chatId || !messagePayload?.content) {
          socket.emit("ai-response", {
            error: "chatId and content are required",
          });
          return;   // stop execution here
        }

        // write data to mongoDB
        const message = await messageModel.create({
          chatId: messagePayload.chatId,
          userId: socket.user._id,
          content: messagePayload.content,
          role: "user",
        });

        // Generate vectors 
        const vectors = await generateVectors(messagePayload.content)
        // console.log(vectors);

        // old messages from pinecone / vectors 
        const memory = await queryMemory({
          queryVector : vectors,
          limit : 3,
          metadata : {}
        })

        console.log(" Memory : ",memory);


        // save on pinecone
        await createMemory({
          vectors : vectors,
          messageId : message._id,
          metadata : {
            chat : messagePayload.chatId,
            user : socket.user._id,
            text : messagePayload.content
          },
        })

        // all old messages
        // const chatHistory = await messageModel.find({
        //   chatId : messagePayload.chatId
        // })

        // last 4 messages / learn about this
        const chatHistory = (
          await messageModel.find({
              chatId: messagePayload.chatId,
            }).sort({ createdAt: -1 }).limit(20).lean()).reverse();

            // feed data to ai / structure for STM (short term memory)
        const response = await generateResponse(
          chatHistory.map((item) => {
            return {
              role: item.role,
              parts: [{ text: item.content }],
            };
          })
        );

        // save response from ai in DB 
        const responseMessage = await messageModel.create({
          chatId: messagePayload.chatId,
          userId: socket.user._id,
          content: response,
          role: "model",
        });

          // Generate vectors 
        const responseVectors = await generateVectors(response)
        // console.log(responseVectors);

        // save on pinecone
        await createMemory({
          vectors : responseVectors,
          messageId : responseMessage._id,
          metadata : {
            chat : messagePayload.chatId,
            user : socket.user._id,
            text : response
          },
        })

        // emit ai response 
        socket.emit("ai-response", {
          chat: messagePayload.chat,
          content: response,
        });


      } catch (error) {
        socket.emit("ai-response", {
          error: "Something went wrong on the server",
        });
      }
      
    });

    socket.on("disconnect", () => {
      console.log("A user is disconnected");
    });
  });
}

export default initSocketServer;
