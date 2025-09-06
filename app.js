const express = require('express')
const app = express()
const userRoutes = require('./src/routes/user.routes')
const cors = require('cors')
const cookie = require('cookie-parser')


app.use(cookie())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use('/api/users', userRoutes)

module.exports = app
