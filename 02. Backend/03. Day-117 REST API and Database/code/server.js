// express server => nodejs application

import express from 'express'

const app = express()  // server create ho jata hai 
app.use(express.json())

app.get("/home", (req,res)=>{
    res.send("hello from home page")
})

app.get("/about", (req,res)=>{
    res.send("hello from about page")
})


// Notes taking app => title & description
let notes = []
app.post("/notes", (req,res)=>{
    // console.log(req.body);
    notes.push(req.body)
    res.json({
        message : "Notes added successfully",
        notes : notes
    })
})

app.listen(3000, ()=>{
    console.log("serverv is running on port 3000");
})