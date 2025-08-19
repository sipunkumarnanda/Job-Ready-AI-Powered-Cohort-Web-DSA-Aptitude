
import { Server } from "socket.io";
import askAi from "../services/ai.service.js";

let aiMemory = []

function setupSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("ai-message", async(message)=>{
         aiMemory.push({ role: "user", parts : [{text : message}] });
         const result = await askAi(aiMemory)

        socket.emit("ai-message-response", result);
         aiMemory.push({ role: "model", parts : [{text : result}] });
    })

    socket.on("disconnect", () => {
      console.log("A user is disconnected");
    });
  });
}

export default setupSocketServer;
