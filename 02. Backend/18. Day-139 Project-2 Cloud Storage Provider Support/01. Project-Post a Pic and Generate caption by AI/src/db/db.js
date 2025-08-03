
import mongoose from "mongoose";

function connectToDB(){
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("connected to DB");
    }).catch((err)=>{
        console.log("DB connection failed error occured : ", err);
    })
}

export default connectToDB