
import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import createPostController from '../controllers/post.controller.js'
import multer from "multer"

const upload = multer({ storage: multer.memoryStorage() })


const router = express.Router()


/* POST/   /api/posts [Protected] {image-file} for file handle we use multer in backend */
router.post('/', authMiddleware, 
    upload.single("image"),
    createPostController
)

export default router