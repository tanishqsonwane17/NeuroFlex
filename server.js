require('dotenv').config()
const connectToDb = require('./src/db/db')
connectToDb()
const app = require('./app')
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})