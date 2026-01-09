
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

router.get('/', productValidators.getProductValidators, productController.getProduct)

module.exports = router