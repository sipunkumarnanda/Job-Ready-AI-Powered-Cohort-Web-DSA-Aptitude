
import mongoose from "mongoose";

/* title & content
type of title - string 
type of content - string
*/
const noteSchema = new mongoose.Schema({
    title : String,
    content : String
})

const noteModel = mongoose.model("note", noteSchema)

export default noteModel