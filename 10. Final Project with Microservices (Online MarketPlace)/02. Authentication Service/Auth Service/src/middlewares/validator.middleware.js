
const { body, validationResult } = require('express-validator')

const respondWithValidationErrors = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }
    next()
}


const registerUserValidation = [
    body("username")
    .isString()
    .withMessage("username must be a string")
    .isLength({ min:3 })
    .withMessage("Username must be at least 3 characters long"),

    body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
    .isLength({ min:6 })
    .withMessage("Password must be atleast 3 characters long"),

    body("fullName.firstName")
    .isString()
    .withMessage("First Name must be a string")
    .notEmpty()
    .withMessage("First name is required"),

    body("fullName.lastName")
    .isString()
    .withMessage("Last Name must be a string")
    .notEmpty()
    .withMessage("Last name is required"),

    body("role")
    .optional()
    .isIn([ 'user', 'seller' ])
    .withMessage("Role must be either 'user' or 'seller' "),

    respondWithValidationErrors
]


const loginUserValidation = [
    body("email")
    .optional()
    .isEmail()
    .withMessage("Invalid email address"),

    body("username")
    .optional()
    .isString()
    .withMessage("User name must be string"),

    body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),

    (req,res,next) => {
        if(!req.body.email && !req.body.username){
            return res.status(400).json({
                errors : [ { msg : "Either email or username is required"}]
            })
        }
        next()
    },

    respondWithValidationErrors
]


const addressUserValidator = [
    body("street")
    .isString()
    .withMessage("Street must be a string")
    .notEmpty()
    .withMessage('Street is required'),,

    body("city")
    .isString()
    .withMessage("city must be a string")
    .notEmpty()
    .withMessage('city is required'),

    body("state")
    .isString()
    .withMessage("state must be a string")
    .notEmpty()
    .withMessage('state is required'),

    body("pincode")
    .isString()
    .withMessage("pincode must be a string")
    .notEmpty()
    .withMessage("pincode is required")
    .bail()
    .matches(/^\d{4,}$/)
    .withMessage("pincode must be atleast 4 digits"),

    body('phone')
        .optional()
        .isString()
        .withMessage('Phone must be a string')
        .bail()
        .matches(/^\d{10}$/)
        .withMessage('Phone must be a valid 10-digit number'),

    body("country")
    .isString()
    .withMessage("country must be a string")
    .notEmpty()
    .withMessage("country is required"),

    body("isDefault")
    .optional()
    .isBoolean()
    .withMessage("isDefault must be a boolean"),

    respondWithValidationErrors
]

module.exports = {
    registerUserValidation,
    loginUserValidation,
    addressUserValidator
}