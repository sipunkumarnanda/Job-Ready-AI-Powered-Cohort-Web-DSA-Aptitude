
import app from "./app.js";
import connectToDB from "./src/db/db.js";

// db connection here 
connectToDB()

app.listen(3000, (()=>{
    console.log("server is running on port 3000");
}))