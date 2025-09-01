import mongoose from "mongoose";
import chatModel from "../models/chat.model.js";

import messageModel from "../models/message.model.js";

async function createChat(req, res) {
    const {title} = req.body

    const user = req.user

    const chat = await chatModel.create({
        user : user._id,
        title
    })

    res.status(201).json({
        message : "chat created successfully",

        chat : {
            _id : chat._id,
            title : chat.title,
            lastActivity : chat.lastActivity,
            user : chat.user
        }
    })
}

async function getChats(req,res) {

  const user = req.user
    try {
    const data = await chatModel.find({
      user : user._id
    }); // ✅ return all chats

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}

async function postChathistory(req, res) {
  const {chatId} = req.body

  try {
    // Validate ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(chatId)) {
      return res.status(400).json({
        success: false,
        error: "Invalid chatId format",
      });
    }

    const data = await messageModel.find({ chatId });

    res.status(200).json({
      success: true,
      messages: data,
    });
  } catch (err) {
    console.error("Error fetching chatsHistory:", err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }

}

export {
    createChat, 
    getChats,
    postChathistory
}