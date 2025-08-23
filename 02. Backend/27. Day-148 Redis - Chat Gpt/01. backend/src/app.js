
import express from 'express'
import indexRouter from './routes/index.routes.js'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/auth', authRouter)


export default app