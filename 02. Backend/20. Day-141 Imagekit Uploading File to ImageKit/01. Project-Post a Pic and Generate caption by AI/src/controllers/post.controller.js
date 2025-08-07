import { generateCaption } from "../services/ai.service.js";
import postModel from '../models/post.model.js'
import uploadFile from "../services/storage.service.js";
import { v4 as uuidv4 } from "uuid";

const createPostController = async (req, res) => {
  try {
    const file = req.file;
    console.log(file);

    const base64Image = file.buffer.toString("base64");
    // console.log(base64data);
    const caption = await generateCaption(base64Image);
    // console.log(caption);
    const result = await uploadFile(file.buffer, `${uuidv4()}`);

    const post = await postModel.create({
        caption : caption,
        image : result.url,
        user : req.user._id
    })

      res.status(201).json({
        post
    });
    
  } catch (error) {
    res.status(500).json({
      message: "Upload failed",
      error: error.message,
    });
  }
};
export default createPostController;
