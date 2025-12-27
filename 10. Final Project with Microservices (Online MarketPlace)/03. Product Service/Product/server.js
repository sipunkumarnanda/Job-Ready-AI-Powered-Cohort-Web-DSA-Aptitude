
const server = require('./src/app.js')
const connectDb = require('./src/db/db.js')
const dotenv = require('dotenv')

dotenv.config()
connectDb()

server.listen(3000, () => {
    console.log("product server is running on port 3000");
})