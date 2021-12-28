const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const index = require('./app/index')
const people = require('./app/people/routes')
const shoppingCart = require('./app/shopping-cart/routes')
const messages = require('./app/messages/routes')
const meetings = require('./app/meetings')
const users = require('./app/users/routes')
const posts = require('./app/posts/routes')
const comments = require('./app/comments/routes')
const cameras = require('./app/cameras/routes')
const books = require('./app/books/routes')
const movies = require('./app/movies/routes')
const funds = require('./app/funds/routes')
const bills = require('./app/bills/routes')

const app = express()

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use((req, res, next) => {
  if (req.query.delay) return setTimeout(next, parseInt(req.query.delay, 10))
  next()
})
app.use('/api', index)
app.use('/api', people)
app.use('/api', messages)
app.use('/api', meetings)
app.use('/api', shoppingCart)
app.use('/api', users)
app.use('/api', posts)
app.use('/api', comments)
app.use('/api', cameras)
app.use('/api', books)
app.use('/api', movies)
app.use('/api', funds)
app.use('/api', bills)
app.get('/', (req, res, next) => res.redirect('/api'))

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  // NOTE: because this app is intended for educational purposes we print the error details in all environments.
  // In a real app you wouldn't give stack traces in production.
  res.status(err.status || 500)

  if (err.status !== 404 && process.env.NODE_ENV === 'test') {
    console.log(err)
  }
  res.json({
    error: err.toString(),
    stack: err.stack.split("\n").slice(1).map(line => line.trim()),
  })
})

module.exports = app
