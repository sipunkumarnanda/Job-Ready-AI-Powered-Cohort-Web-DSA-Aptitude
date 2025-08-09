
import dotenv from 'dotenv'
import app from "./src/app.js";
import { createServer } from "http";
import { Server } from "socket.io";
import generateResponse from './src/service/ai.service.js';

dotenv.config()



const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
   console.log("A user connected"); 

   socket.on("disconnect", (()=>{
    console.log("A user disconnected");
   }))

   // custom event create
   socket.on("message", async(data)=>{
    console.log(data);
   })

   socket.on("ai-message", async(data)=>{
    const response = await generateResponse(data.prompt)
    // console.log(response);
    socket.emit("ai-message-response", {response})
   })
});


httpServer.listen(3000, (()=>{
    console.log("Server is running on port 3000");
}))