
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dtv51f6.mongodb.net/${process.env.DB_NAME}`

// server data base kaise connect hoga ye tum db.js file me likhoge 

function connectToDB(){
    mongoose.connect(URI)
    .then(()=>{
        console.log("connected to DB");
    }).catch((error)=>{
        console.log(error);
    })
}

export default connectToDB