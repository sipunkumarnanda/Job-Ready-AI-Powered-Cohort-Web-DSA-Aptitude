
const Imagekit = require('@imagekit/nodejs');
const { v4 : uuidv4} = require('uuid');

const imagekit = new Imagekit({
    publickey : process.env.IMAGEKIT_PUBLIC_KEY,
    privatekey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlendpoint : process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadImage({buffer, folder= '/products'}) {
    const response = await imagekit.upload({
        file : buffer,
        fileName : uuidv4(),
        folder : folder
    });
    return {
        url : response.url,
        thumblain : response.thumbnailUrl || response.url,
        imageId : response.fileId
    }
}

module.exports = { imagekit, uploadImage };