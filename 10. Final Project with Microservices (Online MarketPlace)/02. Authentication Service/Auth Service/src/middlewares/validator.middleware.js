
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

module.exports = {
    registerUserValidation
}