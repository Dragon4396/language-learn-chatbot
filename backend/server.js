const express = require('express')
const users = require('./data/users')

const app = express()

app.get('/', (req, res) => {
    res.send('The server is running')
})

app.get('/api/users', (req, res) => {
    res.json(users)
})

app.listen(5000, console.log("The server is running on port 5000"))