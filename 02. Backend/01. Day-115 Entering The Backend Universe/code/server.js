
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello from server")
})  // server create ho gaya hai 

server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})


// http => Module
// cat-me => package