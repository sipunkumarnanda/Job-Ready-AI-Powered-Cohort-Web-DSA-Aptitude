
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

    // const images = await Promise.all(
    //     (req.files || []).map(file => {
    //    return uploadImage({buffer : file.buffer})
    // }))

    const files = req.files
    const uploadImagePromises = files.map(async(file) => {
      return await uploadImage({ buffer : file.buffer })
    });

    const images = await Promise.all(uploadImagePromises)

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

async function getProduct(req, res) {
  const { productId } = req.body; // or req.params

  try {
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      product
    });

  } catch (error) {
    console.error("Error occurred in getProduct:", error);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
}



module.exports = {
  createProduct,
  getProduct
};
