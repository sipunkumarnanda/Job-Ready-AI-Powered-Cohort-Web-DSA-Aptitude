
import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import initSocketServer from "./src/socket/socket.server.js";
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()


const httpServer = http.createServer(app)
initSocketServer(httpServer)

connectDB()


httpServer.listen(3000, (()=>{
    console.log("Server is running on port 3000");
}))