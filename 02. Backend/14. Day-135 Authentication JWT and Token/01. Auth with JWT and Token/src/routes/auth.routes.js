import express from 'express'
import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

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

    const token = jwt.sign({
        id : user._id 
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

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


router.get('/user', async (req,res)=>{
     const {token} = req.cookies

     if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
     }

     try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET)
          
         const user = await userModel.findOne({
            _id : decoded.id
         }).select("-password -__v")

         res.status(200).json({
            message : "user data fetched successfully",
            user
         })
     } catch (error) {
         return res.status(401).json({
            message : "Unauthorized - invalid token"
         })
     }
})

export default router