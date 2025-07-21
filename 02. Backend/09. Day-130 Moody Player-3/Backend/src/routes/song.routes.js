
import express from "express";
import multer from "multer";
import uploadFile from "../service/storage.service.js";


const router = express.Router()

const upload = multer({storage:multer.memoryStorage()})


/*
title
artist
song url
*/
router.post('/songs', upload.single("audio"), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    // const fileData = await uploadFile(req.file)
    // console.log(fileData);

    res.status(201).json({
        message : "Song created successfully",
        song : req.body
    })
})


export default router