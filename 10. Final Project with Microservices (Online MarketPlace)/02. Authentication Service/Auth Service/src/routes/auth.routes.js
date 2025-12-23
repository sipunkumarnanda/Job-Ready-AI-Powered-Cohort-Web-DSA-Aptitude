
const express = require('express')
const validators = require('../middlewares/validator.middleware.js')
const authControllers = require('../controllers/auth.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

const router = express.Router()

// POST /auth/register
router.post('/register', validators.registerUserValidation, authControllers.registerUser )

// POST /auth/login
router.post('/login', validators.loginUserValidation, authControllers.loginUser)

// GET /auth/me
router.get("/me", authMiddleware.authMiddleware, authControllers.getCurrentUser)

// GET /auth/logout
router.get("/logout", authControllers.logoutUser)

// POST /auth/address
router.post('/users/me/addresses', authMiddleware.authMiddleware, validators.addressUserValidator, authControllers.addUserAddress )

// GET /auth/users/me/addresses
router.get('/users/me/addresses', authMiddleware.authMiddleware, authControllers.getUserAddresses )

// Delete /auth/users/me/addresses/:addressId
router.delete('/users/me/addresses', authMiddleware.authMiddleware, authControllers.deleteUserAddress)

module.exports = router