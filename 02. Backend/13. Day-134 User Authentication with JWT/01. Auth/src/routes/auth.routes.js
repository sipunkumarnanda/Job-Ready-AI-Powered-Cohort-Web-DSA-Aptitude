import express from 'express'
import userModel from '../models/user.model.js'

const router = express.Router()

/*
POST /auth/register
POST /auth/login
GET /auth/user
GET /auth/logout

*/


router.post('/register', async(req,res)=>{
    const {username, password} = req.body
    const user = await userModel.create({
        username : username,
        password : password
    })

    res.status(201).json({
        message : "user registered successfully",
        user : user
    })
})

router.post('/login', async(req,res)=>{
    const {username, password} = req.body

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(401).json({
            message : "user account not found [invalid username]"
        })
    }

    const isPasswordValid = password ==  user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message : "invalid password"
        })
    }

    res.status(200).json({
        message : "user loggedin successfully"
    })
})

export default router