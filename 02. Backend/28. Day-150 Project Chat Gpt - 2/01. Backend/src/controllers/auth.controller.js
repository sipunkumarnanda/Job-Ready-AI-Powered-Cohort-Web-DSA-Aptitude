
import userModel from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


async function registerUser(req,res) {
    const {fullName : {firstName, lastName}, email, password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message : "User already exists"
        })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullName : {
            firstName, lastName
        }, 
        email, 
        password : hashPassword
    })

    const token = jwt.sign({id : user._id}, process.env.JWT_SECRETE)

    res.cookie("token", token)

    res.status(201).json({
        message : "User registered successfully",
        user : {
            email : user.email,
            _id : user._id,
            fullName : user.fullName
        }
    })
}

async function loginUser(req, res) {
    const {email, password} = req.body

    const user = await userModel.findOne({
        email
    })

    if(!user){
        return res.status(400).json({
            message : "invalid email or password"
        })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if(!isValidPassword){
        return res.status(400).json({
            message : "invalid email or password"
        })
    }

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRETE)

        res.cookie("token", token)

        res.status(200).json({
            message : "user loggedin successfully",
            user : {
                email : user.email,
            _id : user._id,
            fullName : user.fullName
            }
        })
}



export {
    registerUser,
     loginUser
}