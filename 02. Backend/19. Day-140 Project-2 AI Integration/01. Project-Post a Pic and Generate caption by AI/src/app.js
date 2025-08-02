
import express from 'express'
import router from './routes/auth.routes.js'
import postRouter from './routes/post.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', router)
app.use('/api/posts', postRouter)

export default app