
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function connectToDB(){
    mongoose.connect(process.env.CONNECTION_URI)
    .then(()=>{
        console.log("connected to db successfully");
    }).catch((err)=>{
        console.log("DB connection failed error occured : ", err);
    })
}

export default connectToDB