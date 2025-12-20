
const express = require('express')
const validators = require('../middlewares/validator.middleware.js')
const authControllers = require('../controllers/auth.controller.js')

const router = express.Router()

router.post('/register', validators.registerUserValidation, authControllers.registerUser )


module.exports = router