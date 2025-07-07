
import express from 'express'
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.get("/home", (req,res)=>{
    res.send("Hello from home page")
})
app.get("/about", (req,res)=>{
    res.send("Hello from about page")
})

// notes => title & content
app.use(express.json());  // its a middleware
let notes = []
app.post("/notes", (req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message : "notes added successfully"
    })
})

app.get("/notes", (req,res)=>{
    res.json(notes)
})

/* DELETE /notes/:id */
app.delete('/notes/:index', (req,res)=>{
    const index = req.params.index
    // notes.splice(index,1)
    delete notes[index]
    res.json({
        message : "Note delete successfully"
    })
})

/* PATCH /notes/:index => {title} */
app.patch('/notes/:index', (req,res)=>{
    const index = req.params.index
    const {title} = req.body

    notes[index].title = title
    res.json({
        message : "Note updates successfully"
    })
})

app.listen(3000, (()=>{
    console.log("App is running on port 3000");
}))