
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.DB_URI

function connectToDB(){
    mongoose.connect(uri)
    .then(()=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log("Error occured to DB connect : ", err);
    })
}

export default connectToDB