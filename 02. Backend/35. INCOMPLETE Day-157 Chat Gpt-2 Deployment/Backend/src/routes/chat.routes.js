
import express from 'express'
import {authUser} from '../middleware/auth.middleware.js'
import { createChat, getChats, postChathistory } from '../controllers/chat.controller.js'

const router = express.Router()


/* POST /api/chat */
router.post('/', authUser,  createChat)
router.get('/', authUser,  getChats)
router.post('/chathistory', authUser,  postChathistory)

export default router