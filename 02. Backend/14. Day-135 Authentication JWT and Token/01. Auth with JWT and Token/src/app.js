
import express from 'express'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

/*
POST /auth/register
POST /auth/login
GET /auth/user
GET /auth/logout

*/

app.use('/auth', authRoutes)
// app.use('/product', productRoutes) // its an example 

export default app