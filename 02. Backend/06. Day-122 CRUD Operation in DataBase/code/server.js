
import express from 'express'
import connectToDB from './src/db/db.js'
import noteModel from './src/models/note.model.js'

const app = express()
app.use(express.json())
connectToDB()


app.post("/notes", async (req, res)=>{
   const {title, content} = req.body
   console.log(title, content);

   await noteModel.create({
    title, content
   })

   res.json({
    message : "Note created successfully"
   })
})



app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find()
    res.json({
        message : "Notes fetch successfully",
        notes
    })
})



app.delete("/notes/:id", async(req,res)=>{
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id : noteId
    })

    res.json({
        message : "Note delete successfully"
    })
})



app.patch("/notes/:id", async (req,res)=>{
    const noteId = req.params.id
    const {title, content} = req.body

    await noteModel.findOneAndUpdate({
        _id : noteId
    },{
        title : title,
        content : content
    })
    
    res.json({
        message : "Note updated successfully"
    })
})

app.listen(3000, (()=>{
    console.log("App is running on port 3000");
}))