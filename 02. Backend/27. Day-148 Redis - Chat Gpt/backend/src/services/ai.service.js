
import dotenv from 'dotenv'
import { GoogleGenAI } from "@google/genai";

dotenv.config()

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey : process.env.GEMINI_APIKEY
});

async function askAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return response.text
}

export default askAi