
import http from 'http'
import app from "./src/app.js";
import connectToDB from '../backend/src/db/db.js'
import setupSocketServer from "./src/socket/socket.server.js";

const httpServer = http.createServer(app)
setupSocketServer(httpServer)


connectToDB()

httpServer.listen(3000, (()=>{
    console.log("Server is ruuning on port 3000");
}))