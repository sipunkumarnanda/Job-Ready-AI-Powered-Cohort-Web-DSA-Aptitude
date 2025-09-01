
import express from 'express'
import indexRoutes from './routes/index.route.js'
import authRoutes from './routes/auth.route.js'
import chatRoutes from './routes/chat.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(cors({
    origin : 'http://localhost:3000',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    credentials : true
}))

/* Using Middleware */
app.use(express.json())
app.use(cookieParser())

/* Using Routes */
app.use('/', indexRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/chat', chatRoutes)


export default app