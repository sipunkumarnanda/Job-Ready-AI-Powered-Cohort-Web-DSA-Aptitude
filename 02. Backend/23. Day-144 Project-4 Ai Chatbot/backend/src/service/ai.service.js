
import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
dotenv.config()

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});


async function  generateResponse(chatHistory) {
    const response = await ai.models.generateContent({
        model : "gemini-2.0-flash",
        contents : chatHistory
    })

    return response.text
}

export default generateResponse