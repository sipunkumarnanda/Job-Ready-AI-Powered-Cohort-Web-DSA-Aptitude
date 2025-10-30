

const express = require('express')
const validators = require('./middleware/validator.middleware.js')

const app = express()
app.use(express.json())

app.post('/register', validators.registerValidationRules, (req,res)=>{
    const { username, email, password } = req.body;

    res.status(201).json({
        message : username, email, password
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})