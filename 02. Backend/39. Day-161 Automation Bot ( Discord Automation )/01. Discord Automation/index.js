
import dotenv from 'dotenv'
import { Client, GatewayIntentBits, AttachmentBuilder } from 'discord.js'
import { GoogleGenAI } from "@google/genai";
dotenv.config()

const ai = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});

async function generateImage(prompt) {
     const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.text) {
      console.log(part.text);
    } else if (part.inlineData) {
      const imageData = part.inlineData.data;
      const buffer = Buffer.from(imageData, "base64");
      console.log("Image saved as gemini-native-image.png");
      return buffer
    }
  }
}

async function generateContent(prompt) {
     const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          { text: "Your name is Nova 💖. Always reply in a fun, flirty Hinglish style like a 20-22 year old hot girlfriend 😉. Add playful winks/emojis." },
          { text: prompt }
        ],
      },
    ],
  });

  return response.text
}



const client = new Client({
     intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
    });

client.once("clientReady", () => {
    console.log("bot is ready");
});

client.on("messageCreate", async (message) => {

    const isBot = message.author.bot
    if(isBot) return

    /* 
    const imageBuffer = await generateImage(message.content)
    if(imageBuffer) {
        const attachment = new AttachmentBuilder(imageBuffer, { name : "generated-image.png"})

        message.channel.send({ files : [attachment] })
    }
 */

    const response = await generateContent(message.content)
    message.reply(response)
})

client.login(process.env.DISCORD_BOT_TOKEN)