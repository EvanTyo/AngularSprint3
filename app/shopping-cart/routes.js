const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/products', (req, res, next) => {
  const products = db.products.findAll()
  res.json(products)
})

router.get('/products/:id', (req, res, next) => {
  const product = db.products.find(req.params.id)
  res.json(product)
})

router.delete('/products/:id', (req, res, next) => {
  const product = db.products.find(req.params.id)
  if (product) {
    db.products.delete(req.params.id)
  }

  res.status(200)
  res.end()
})

router.get('/items', (req, res, next) => {
  const items = db.items.findAll()
  res.json(items)
})

router.post('/items', (req, res, next) => {
  const item = db.items.insert({ 
    quantity: Number(req.body.quantity), 
    product_id: Number(req.body.product_id) 
  })  
  res.json(item)
})

router.post('/products/:productId/items', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10)
  const product = db.products.find(req.params.productId)
  const item = db.items.insert({ quantity: req.body.quantity, product_id: product.id })

  res.json(item)
})

router.delete('/products/:productId/items/:itemId', (req, res, next) => {
  const item = db.items.find(req.params.itemId)
  if (item) {
    db.items.delete(req.params.itemId)
  }

  res.status(200)
  res.end()
})

module.exports = router
