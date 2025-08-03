
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
     image : String,
     caption : String,
     user : {
        type : mongoose.Schema.ObjectId,
        ref : "users"
     }
})

const postModel = mongoose.model("post", postSchema)

export default postModel