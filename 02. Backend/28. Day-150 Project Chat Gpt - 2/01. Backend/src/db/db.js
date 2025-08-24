
import mongoose from "mongoose";


async function connectDB(){
    try {
        await mongoose.connect(process.env.DB_URI)
         console.log("connected to db");
    } catch (error) {
        console.log("Something went wrong , DB connection failed : ", err);
    }
}

export default  connectDB