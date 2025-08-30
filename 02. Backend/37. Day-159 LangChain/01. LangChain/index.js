
import dotenv from 'dotenv'
dotenv.config()


import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey : process.env.GEMINI_API_KEY
});


/* 
Batch and stream are also supported
const res = await model.invoke("who are you");
console.log(res.content);
*/


const promptTemplate = PromptTemplate.fromTemplate(
  `explain {topic} is very simple way like ELI5, make sure to include the core concepts and avoid jargon. make the answer conside as possible.`
);



/* 
const input = await promptTemplate.invoke({ topic: "express js"})  // .format()
const res = await model.invoke(input)
console.log("Input : ", input);
console.log("Res : ", res);
*/


/*
const chain = promptTemplate.pipe(model)
const res = await chain.invoke({ topic : "Quantum computing"})
console.log(res.content);
*/


const response = await promptTemplate.pipe(model).invoke({ topic: "express js"})
console.log(response.content);

