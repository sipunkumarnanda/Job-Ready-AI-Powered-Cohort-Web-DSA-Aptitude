
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { GoogleGenAI, Type  } from "@google/genai";
import dotenv from 'dotenv'

dotenv.config()
const ai = new GoogleGenAI({});

const tools = []

const transport = new StdioClientTransport({
    command : "node",
    args : ["./mcp.server.js"]
})

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0"
  }
);

await client.connect(transport);

const response = await client.listTools();
response.tools.forEach((tool) => {
  tools.push({
    name: tool.name,
    description: tool.description,
    parameters: {
      type: "OBJECT",  
      properties: tool.inputSchema.properties,
      required: tool.inputSchema.required || []
    }
  });
});


// Send request with function declarations
const aiResponse = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents: "Add 2 and 3",
  config: {
    tools: [{
      functionDeclarations: tools
    }],
  },
});

console.log("AI Response : " , aiResponse.functionCalls);

aiResponse.functionCalls.forEach(async(call)=>{
   const toolResponse = await client.callTool({
        name : call.name,
        arguments : call.args
    })

    console.log("Tool Response : ", toolResponse);
})