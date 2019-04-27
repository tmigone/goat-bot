const express = require('express')
const bodyParser = require('body-parser')
const messi = require('./messi')

// Middleware
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get('*', messi.data)
app.post('/bless', messi.blessing)
app.post('/goat', messi.goat)

// Start listening only in development
if (process.env.NODE_ENV === 'development') {
  app.listen(3000)
}

// now.sh takes care of listening on production
module.exports = app
