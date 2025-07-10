
// server for fetch quote

import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const url = 'https://zenquotes.io/api/random';

app.get("/quote", async (req, res) => {
  try {
    let response = await axios.get(url);       
    res.send(response.data);            
  } catch (error) {
    res.json({
        message : error.message
    })
     console.error("Axios Error:", error.message);
     if (!res.headersSent) {
      res.status(500).json({ error: "Failed to fetch quote" }); // ✅ Only send if not already sent
    }
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
