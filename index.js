const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.send(200, '<h1>Hello, world!</h1>')
})

app.post('*', (req, res) => {
    res.send('Lionel Messi')
})

module.exports = app