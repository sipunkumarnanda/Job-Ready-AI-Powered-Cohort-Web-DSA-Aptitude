
import express from 'express'
import productRoutes from "./routes/product.routes.js";
import cors from 'cors'
import paymentRoutes from './routes/payment.routes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/payments', paymentRoutes)


export default app