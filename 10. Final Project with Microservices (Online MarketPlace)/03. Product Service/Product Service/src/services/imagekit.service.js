
const Imagekit = require('imagekit');
const { v4 : uuidv4} = require('uuid');

const imagekit = new Imagekit({
    publickey : process.env.IMAGEKIT_PUBLIC_KEY || 'test_public',
    privatekey : process.env.IMAGEKIT_PRIVATE_KEY || 'test_private',
    urlendpoint : process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/demo'
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