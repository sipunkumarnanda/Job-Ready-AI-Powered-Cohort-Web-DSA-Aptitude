
import app from "./src/app.js";
import connectToDB from './src/db/db.js';
import songModel from "./src/Models/song.model.js";

connectToDB()


app.post("/songs", async (req, res)=>{
   const {title, artist} = req.body
   console.log(title, artist);

   await songModel.create({
    title, artist
   })

   res.json({
    message : "songs created successfully"
   })
})



app.get("/songs", async (req, res)=>{
    const songs = await songModel.find()
    res.json({
        message : "songs fetch successfully",
        songs
    })
})




app.listen(3000, (()=>{
    console.log("Server is running on port 3000");
}))