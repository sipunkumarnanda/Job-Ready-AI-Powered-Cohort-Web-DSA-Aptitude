
const app = require('./src/app.js')
const connectDb = require('./src/db/db.js')
const dotenv = require('dotenv')

dotenv.config()
connectDb()

app.listen(3001, () => {
    console.log("product server is running on port 3001");
})