
import express, { json } from 'express'
import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', async (req,res)=>{
    const {username, password} = req.body

    const existingUser = await userModel.findOne({
        username : username
    })

    if(existingUser){
        return res.status(409).json({
            message : "username already exists"
        })
    }
    const user = await userModel.create({
        username : username,
        password : password
    })

    // Token create 
    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message : "user created successfully",
        user
    })
})

router.post('/login', async(req,res)=>{
    const {username , password} = req.body

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(401).json({
            message : "user account not found [invalid username]"
        })
    }

    const isPasswordValid = password == user.password

    if(!isPasswordValid){
        return json.status(401).json({
            message : "invalid password"
        })
    }

    res.status(200).json({
        message : "user loggedin successfully"
    })
})


router.get('/user', async(req,res)=>{
    const {token} = req.cookies

    if(!token){
        res.status(401).json({
            message : "Unauthorized"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id : decode.id
        }).select("-password -__v")

        res.status(200).json({
            message : "user data fetched successfully",
            user
        })
    } catch (error) {
        res.status(401).json({
            message : "Unauthorized Invalid token"
        })
    }
})

export default router