const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('The server is running')
})

app.listen(5000, console.log("The server is running on port 5000"))