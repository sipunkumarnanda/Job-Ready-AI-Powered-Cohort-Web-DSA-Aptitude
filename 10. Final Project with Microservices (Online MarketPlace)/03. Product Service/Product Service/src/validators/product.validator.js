
const { body, validationResult } = require('express-validator')

function handleValidationErrors(req, res, next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            message : "Validation error", errors
        })
    }
    next()
}

const createProductValidators = [
    body("title")
    .trim()
    .isString()
    .withMessage("title must be string")
    .notEmpty()
    .withMessage("title is required"),
 
    body("description")
    .optional()
    .isString()
    .trim()
    .withMessage("description must be string")
    .isLength({ max:500 })
    .withMessage("description length must be 500 characters"),

    body("priceAmount")
    .notEmpty()
    .withMessage("priceAmount is required")
    .bail()
    .isFloat({ gt:0 })
    .withMessage("priceAmount must be a number > 0"),

    body("priceCurrency")
    .optional()
    .isIn([ 'USD', 'INR' ])
    .withMessage("priceCurrency must be USD or INR"),

    handleValidationErrors
]

module.exports = {
    createProductValidators
}