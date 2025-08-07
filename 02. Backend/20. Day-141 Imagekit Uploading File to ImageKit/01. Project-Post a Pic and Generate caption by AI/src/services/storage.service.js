
import dotenv from 'dotenv';
import ImageKit from 'imagekit';

dotenv.config();

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
   try {
     const response = await imagekit.upload({
      file: file,
      fileName: fileName,
      folder : "/caption_generator"
    });
    return response;

   } catch (error) {
    console.error('ImageKit upload failed:', error.message);
    throw error;
   }
}

export default uploadFile;
