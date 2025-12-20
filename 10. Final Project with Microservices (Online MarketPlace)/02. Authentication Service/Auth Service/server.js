
const server = require('./src/app')
const connectDB = require('./src/db/db.js')
const dotenv = require('dotenv')


dotenv.config()
connectDB()

server.listen(3000, () => { 
    console.log('Auth Service is running on port 3000');
}); 