
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dtv51f6.mongodb.net/${process.env.DB_NAME}`

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}/${process.env.DB_NAME}`


function connectToDB(){
    mongoose.connect(uri)
    .then(()=>{
        console.log("connected to db");
    }).catch((error)=>{
        console.error("Error occured to  Mongodb : ", error)
    })
}

export default connectToDB