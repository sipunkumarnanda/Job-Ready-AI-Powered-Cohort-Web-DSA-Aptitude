
const mongoose = require('mongoose')

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to db");
    } catch (error) {
        console.error("Error occured db connection failed ", error)
    }
}

module.exports = connectDb