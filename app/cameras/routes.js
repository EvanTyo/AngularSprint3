const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/cameras', (req, res) => {
  const cameras = db.cameras.findAll()
  res.json(cameras)
})

router.get('/cameras/:id', (req, res) => {
  const camera = db.cameras.find(req.params.id)
  res.json(camera)
})

router.post('/cameras', (req, res) => {
  const newcamera = db.cameras.insert({
    "name": req.body.name,
    "price": req.body.price,
    "picture": req.body.picture,
    "createdAt": new Date(),
    "rating": 0,
    "inCart": req.body.inCart
  })
  res.json(newcamera)
})

router.patch('/cameras/:id/add', (req, res) => {
  const camera = db.cameras.find(req.params.id)
  camera.inCart = true
  res.send(camera)
})

router.patch('/cameras/:id/remove', (req, res) => {
  const camera = db.cameras.find(req.params.id)
  camera.inCart = false
  res.send(camera)
})

router.delete('/cameras/:id', (req, res) => {
  const camera = db.cameras.find(req.params.id)
  if (camera) {
    db.cameras.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

module.exports = router
