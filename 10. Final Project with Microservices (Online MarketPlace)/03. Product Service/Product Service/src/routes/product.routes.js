
const express = require('express')
const router = express.Router()
const multer = require('multer')
const createAuthMiddleware = require('../middleware/auth.middleware.js')
const productController = require('../controller/product.controller.js')
const productValidators = require('../validators/product.validator.js')

const upload = multer({
    storage: multer.memoryStorage()
})   


// POST  /api/products/ 
router.post('/', createAuthMiddleware(['admin', 'seller']), upload.array('images', 5), productValidators.createProductValidators, productController.createProduct)

// GET /api/products
router.get('/', productController.getProducts)

// GET /api/products/:id
router.get('/:id', productController.getProductById)

// PATCH /api/products/:id
router.patch('/:id', createAuthMiddleware(['seller']), productController.updateProduct)

module.exports = router