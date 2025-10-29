
import mongoose from 'mongoose'
import {config} from 'dotenv'
config()

async function connectDB() {
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("Connected to DB");
    } catch (error) {
        console.error("error connecting to the database ", error)
        process.exit(1)
    }
}

export default connectDB