
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
    .withMessage("First Name must be string")
    .notEmpty()
    .withMessage("First name is required"),

    body("fullName.lastName")
    .isString()
    .withMessage("Last Name must be string")
    .notEmpty()
    .withMessage("Last name is required"),

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
    .withMessage("Street must be string"),

    body("city")
    .isString()
    .withMessage("city must be string"),

    body("state")
    .isString()
    .withMessage("state must be string"),

    body("zip")
    .isString()
    .withMessage("zip must be string"),

    body("country")
    .isString()
    .withMessage("country must be string"),

    respondWithValidationErrors
]

module.exports = {
    registerUserValidation,
    loginUserValidation,
    addressUserValidator
}