const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/people', (req, res, next) => {
  const people = db.people.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  res.json(people)
})

router.get('/people/:id', (req, res, next) => {
  const person = db.people.find(req.params.id)
  res.json(person)
})

router.post('/people', (req, res) => {
  const newpost = db.posts.insert({
    "name": req.body.name
  })
  res.json(newpost)
})

module.exports = router
