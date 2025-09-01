
// Make notes on it 

import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'
dotenv.config()

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

client.on("messageCreate", (message) => {
    // message.reply("This is response from the bot. ")
    // console.log("Message received : ",  message.content);

    console.log(message.author);

    const attachment = message.attachments
    // console.log(attachment);

    attachment.forEach((attachment)=>{
        console.log(attachment.url);
    })

    const isBot = message.author.bot
    if(isBot) return

    const content = message.content.toLowerCase()

    if(content == "hello"){
        message.reply("Hello! How can i assist you today ?")
    }

    if(content == "help"){
        message.reply("Sure! Here are some commands you can use : .........")
    }
})

client.login(process.env.DISCORD_BOT_TOKEN2)