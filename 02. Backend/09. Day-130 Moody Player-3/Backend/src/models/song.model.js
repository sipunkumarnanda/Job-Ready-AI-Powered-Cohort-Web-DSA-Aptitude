
import mongoose from "mongoose";

/* title & content
type of title - string 
type of artist - string
*/
const songSchema = new mongoose.Schema({
    title : String,
    artist : String,
    audio : String
})

const song = mongoose.model("song", songSchema)

export default song