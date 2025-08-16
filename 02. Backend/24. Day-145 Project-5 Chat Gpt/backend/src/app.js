
import express from 'express'
import router from './routes/index.routes.js'

const app = express()
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(express.static('public'))

app.use('/', router)


export default app