
// api ke andar kya hoga aur kese hoga uske kaam mein ayenge 

import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


// // Register router
const registerController = async(req,res)=>{
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
        password : await bcrypt.hash(password,10)
    })

    // Token create 
    const token = jwt.sign({ id : user._id },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message : "user created successfully",
        user
    })
}



// // Login router
const loginController = async(req,res)=>{
    const {username , password} = req.body

    const user = await userModel.findOne({
        username : username
    })

    if(!user){
        return res.status(404).json({
            message : "user account not found [invalid username]"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message : "invalid password"
        })
    }

    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({
        message : "user loggedin successfully"
    })
}


// User router
// GET / user [protected]
const userController = async(req,res)=>{
    const token = req.cookies.token

    if(!token){
        res.status(401).json({
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
        res.status(401).json({
            message : "Unauthorized Invalid token"
        })
    }
}



export{ 
    registerController,
    loginController,
    userController
}