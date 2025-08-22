
// Import the Pinecone library
import { Pinecone } from '@pinecone-database/pinecone'

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_APIKEY });

const cohortChatGptIndex = pc.Index('cohort-chat-gpt')

async function createMemory({vectors, messageId, metadata}){
     await cohortChatGptIndex.upsert([{
        id : messageId ,
        values : vectors,
        metadata
     }])
}

async function queryMemory({queryVector, limit = 5 , metadata}) {
    const data = await cohortChatGptIndex.query({
        vector : queryVector,
        topK : limit,
        filter : metadata ? metadata : undefined ,
        includeMetadata : true
    })

    return data.matches
}


export  { createMemory,
    queryMemory
}