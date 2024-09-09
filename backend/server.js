const express = require('express')
const users = require('./data/users')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send('The server is running')
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

const PORT = process.env.PORT | 5000

app.listen(PORT, console.log(`The server is running on port ${PORT} under ${process.env.NODE_ENV} mode`))