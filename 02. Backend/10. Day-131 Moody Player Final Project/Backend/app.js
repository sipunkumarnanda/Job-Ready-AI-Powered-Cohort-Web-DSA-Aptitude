
import express from 'express'
import songRoutes from './src/routes/song.routes.js'
import cors from 'cors'


const app = express()

app.use(cors())

app.use(express.json())
app.use('/', songRoutes)

export default app