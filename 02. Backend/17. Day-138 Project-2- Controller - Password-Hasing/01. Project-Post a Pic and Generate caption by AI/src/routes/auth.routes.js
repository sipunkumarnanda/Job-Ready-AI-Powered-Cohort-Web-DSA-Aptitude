
// api kon kon se hain , is file me likthe hai 

import express, { json } from 'express'
import { registerController, loginController, userController } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', registerController)

router.post('/login', loginController)

router.get('/user', userController)

export default router