
import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use((req,res, next)=>{
    console.log("This middleware is between app and route");
    next()
})

app.use('/', indexRoutes)

export default app