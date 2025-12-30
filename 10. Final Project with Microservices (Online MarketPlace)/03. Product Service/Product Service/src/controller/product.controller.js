
const productModel = require("../models/product.model.js");
const { uploadImage } = require('../services/imagekit.service.js')

async function createProduct(req, res) {
  try {
    const { title, description, priceAmount, priceCurrency = "INR" } = req.body;
    const seller = req.user.id; // Extract seller from authenticated user

    const price = {
        amount : Number(priceAmount),
        currency : priceCurrency
    }

    const files = req.files

    const images = await Promise.all(
        (files || []).map(file => {
       return uploadImage({buffer : file.buffer})
    }))

    const product = await productModel.create({
        title, description, price, seller, images
    })

    return res.status(201).json({
        message : "Product created",
        data : product
    })


  } catch (error) {
    console.error("Error occured in create product ", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  createProduct,
};
