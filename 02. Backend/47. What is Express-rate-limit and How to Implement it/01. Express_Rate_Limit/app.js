

const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()

const limiter = rateLimit({
    window : 1 * 60 * 1000 ,
    max : 10 ,
    message : "Too many request from this IP, please try again after a minute"
})

// app.use(limiter)
app.use(express.json())


app.post('/api/auth/register', limiter, (req,res)=>{
    res.status(201).json({
        message : "User registered successfully"
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})