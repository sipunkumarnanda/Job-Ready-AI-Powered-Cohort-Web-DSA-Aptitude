
import express from 'express'
import {authMiddleware} from '../middleware/auth.middleware.js'

const router = express.Router()

router.get('/', authMiddleware.authUser , (req,res)=>{
    res.render("home")
})

export default router