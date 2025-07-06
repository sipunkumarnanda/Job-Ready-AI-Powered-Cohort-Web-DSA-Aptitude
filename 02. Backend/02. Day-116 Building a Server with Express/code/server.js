
import express from 'express'

const app = express()

app.get('/home', (req, res) => {
  /*
  req.body
  req.query
  req.params
  req.headers & req.cookies
  */
  res.send('welcome to home page')
})

app.get('/about', (req,res)=>{
    res.send("welcome to the about page")
})
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})