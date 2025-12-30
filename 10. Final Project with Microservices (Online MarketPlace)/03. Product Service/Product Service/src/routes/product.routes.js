
const express = require('express')
const router = express.Router()
const multer = require('multer')
const createAuthMiddleware = require('../middleware/auth.middleware.js')
const productController = require('../controller/product.controller.js')

const upload = multer({
    storage: multer.memoryStorage()
})   


// POST  /api/products/ 
router.post('/', createAuthMiddleware(['admin', 'seller']), upload.array('images', 5), productController.createProduct)

module.exports = router