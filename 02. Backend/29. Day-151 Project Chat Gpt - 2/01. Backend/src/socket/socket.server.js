import { Server } from "socket.io";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import generateResponse from "../services/ai.service.js";
import messageModel from "../models/message.model.js";

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
   
    socket.on("ai-message", async(messagePayload) => {
      // console.log(messagePayload);

      await  messageModel.create({
        chatId : messagePayload.chatId,
        userId : socket.user._id,
        content : messagePayload.content,
        role : "user"
      })

      // all old messages 
      // const chatHistory = await messageModel.find({
      //   chatId : messagePayload.chatId
      // })

      // last 4 messages / learn about this 
      const chatHistory = (await messageModel.find({
        chatId : messagePayload.chatId
      }).sort({createdAt : -1}).limit(20).lean()).reverse()

      const response = await generateResponse(chatHistory.map((item)=>{
        return {
          role : item.role,
          parts : [{text : item.content}] 
        }
      }))
      
       await  messageModel.create({
        chatId : messagePayload.chatId,
        userId : socket.user._id,
        content : response,
        role : "model"
      })

       socket.emit('ai-response', {
        chat : messagePayload.chat , 
        content : response
      })

    });

    socket.on("disconnect", () => {
      console.log("A user is disconnected");
    });
  });
}

export default initSocketServer;
