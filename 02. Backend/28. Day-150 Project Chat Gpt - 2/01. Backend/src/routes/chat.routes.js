
import express from 'express'
import {authUser} from '../middleware/auth.middleware.js'
import { createChat } from '../controllers/chat.controller.js'

const router = express.Router()


/* POST /api/chat */
router.post('/', authUser,  createChat)

export default router