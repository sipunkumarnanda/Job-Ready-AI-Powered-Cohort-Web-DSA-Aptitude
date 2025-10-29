
import productModel from "../models/product.model.js";

async function createProduct(req,res) {
    const {image, title, description, price: {amount,currency}} = req.body

    try {
        const product = await productModel.create({
            image , title, description , price : {amount, currency}
        })
        return res.status(201).json({
            message : "Product creaed successfully",
            product
        })
    } catch (error) {
         return res.status(500).json({
            message : "Something went wrong",
            err : error.message
         })
    }
}

async function getItem(req,res) {
    try {
        const products = await productModel.findOne()
        return res.status(200).json({
            message : "Products fetched successfully",
            products
        })
    } catch (error) {
         return res.status(500).json({
            message : "Something went wrong",
            err : error.message
         })
    }
}

export {
    createProduct ,
    getItem
    } 