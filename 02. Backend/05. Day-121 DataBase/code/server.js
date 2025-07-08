
/*
 POST /notes => {title, content}
 GET /notes => get all notes 
 PATCH /notes/:id => update notes
 DELETE /notes/:id => delete a note
*/

import express from 'express'
import connectToDB from './src/db/db.js'

// server database se connect server.js file me 
connectToDB()

const app = express()
app.use(express.json())

let notes = []


app.get("/", (req,res)=>{
    res.send("Hello From Home Page")
})

app.get("/about", (req,res)=>{
    res.send("Hello From Home about Page")
})

app.get("/notes", (req,res)=>{
    res.send(notes)
})

app.post("/notes", (req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message : "Notes added successfully"
    })
})

app.delete("/notes/:index", (req,res)=>{
    let index = req.params.index
    delete notes[index]
    res.json({
        message : "note delete successfully"
    })
})

app.patch("/notes/:index", (req,res)=>{
    let index = req.params.index
    let {title, content} = req.body

    notes[index].title = title
    notes[index].content = content

    res.json({
        message : "Note updated successfully"
    })

})

app.listen(3000, ()=>{
    console.log("App is running on port 3000");
})