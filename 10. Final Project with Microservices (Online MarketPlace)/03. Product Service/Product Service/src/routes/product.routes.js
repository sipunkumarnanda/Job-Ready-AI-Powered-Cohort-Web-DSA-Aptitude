
const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage()
})   


// POST  /api/products/ 
router.post('/', upload.array('images', 5),)

module.exports = router