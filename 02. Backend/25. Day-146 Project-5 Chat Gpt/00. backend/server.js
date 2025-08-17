
import app from "./src/app.js";
import connectToDB from '../backend/src/db/db.js'
connectToDB()



app.listen(3000, (()=>{
    console.log("Server is ruuning on port 3000");
}))