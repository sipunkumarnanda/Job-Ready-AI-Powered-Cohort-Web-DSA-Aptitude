
import dotenv from 'dotenv'
import app from "./src/app.js";
import connectToDB from "./src/db/db.js";

dotenv.config()

connectToDB()

app.listen(3000, (()=>{
    console.log("server is running on port 3000");
}))