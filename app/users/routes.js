const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/users', (req, res) => {
  const users = db.users.findAll()
  res.json(users)
})

router.get('/users/:id', (req, res) => {
  const user = db.users.find(req.params.id)
  res.json(user)
})

router.post('/users', (req, res) => {
  const newUser = db.users.insert({
    "name": req.body.name,
    "phone": req.body.phone,
    "email": req.body.email,
    "company": req.body.company,
    "address": req.body.address,
    "photo_url": "http://placehold.it/100x100",
    "password": req.body.password || "hello"
  })
  res.json(newUser)
})

router.post('/login', (req, res) => {
  const user = db.users.findBy('email', req.body.email)
  if(user && req.body.password === user.password) {
    res.json(user)
  } else {
    res.sendStatus(400)
  }
})

router.patch('/users/edit/:id', (req, res) => {
  let user = db.users.findBy('id', req.params.id)

  user = req.body

  res.send(user)
})

router.delete('/users/:id', (req, res) => {
  const user = db.users.find(req.params.id)
  if (user) {
    db.users.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
