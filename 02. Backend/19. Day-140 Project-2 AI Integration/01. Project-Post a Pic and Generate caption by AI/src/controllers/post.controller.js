
import postModel from "../models/post.model.js"
import { generateCaption } from "../services/ai.service.js";

const createPostController = async(req, res) => {
    const file = req.file
    console.log(file);

    const base64Image = file.buffer.toString('base64')
    // console.log(base64data);
    const caption = await generateCaption(base64Image)
    // console.log(caption);
    res.status(201).json({
        caption : caption
    })
}
export default createPostController