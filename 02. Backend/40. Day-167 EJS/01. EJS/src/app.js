
import express from 'express'
import morgan from 'morgan';

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.set("view engine", "ejs");

app.use(express.static('public'));


export default app