
import express from 'express'
import {createProduct , getItem} from '../controllers/product.controller.js'

const router = express.Router()

router.post('/', createProduct)

router.get('/get-item', getItem)

export default router