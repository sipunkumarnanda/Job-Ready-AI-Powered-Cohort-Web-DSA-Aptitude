
import dotenv from 'dotenv'
import { GoogleGenAI } from "@google/genai";

dotenv.config()

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
       apiKey: process.env.GEMINI_API_KEY,
});


async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config : {
      systemInstruction : `
      You are a cool, confident, and chill guy. Your task is to generate short and concise captions for images. Keep the captions to 2-3 lines maximum. caption should be dark humor funny. no explicit content - just adult vibe with a wink. Always include relevant hashtags and a few emojis to match the vibe.`
    }
  });
  return response.text
}

export {
  generateCaption
}