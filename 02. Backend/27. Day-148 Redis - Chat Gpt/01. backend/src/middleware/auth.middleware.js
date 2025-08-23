
import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function authUser(req, res, next) {
    const token = req.cookies?.token

    if(!token){
        return res.redirect("/auth/login")
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRETE)

        const user = await userModel.findById(decoded.id)

        req.user = user

        next()
    } catch (error) {
        return res.redirect('/auth/login')
    }
}

export const authMiddleware = {
    authUser
}