
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function connectToDB(){
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.log("Error occured db connection failed : ", err);
    })
}

export default connectToDB