
import mongoose from "mongoose";

/* title & content
type of title - string 
type of content - string
*/
const songSchema = new mongoose.Schema({
    title : String,
    artist : String
})

const songModel = mongoose.model("songs", songSchema)

export default songModel