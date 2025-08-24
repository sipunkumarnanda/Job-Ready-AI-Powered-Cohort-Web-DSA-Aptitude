
import { Server } from "socket.io";

function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("ai-message", (message)=>{
        console.log(message);
    })

    socket.on("disconnect", ()=>{
        console.log("A user is disconnected");
    })
  });
}


export default initSocketServer