const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/bills', (req, res) => {
  const bills = db.bills.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  console.log("hitting the bills route", bills[0]);
  res.json(bills)
})

router.get('/bills/:id', (req, res) => {
  const bill = db.bills.find(req.params.id)
  res.json(bill)
})

router.post('/bills', (req, res) => {
  const newBill = db.bills.insert({
    "title": req.body.title,
    "description": req.body.description,
    "dueDate": req.body.dueDate,
    "amount": req.body.amount,
    "paid": false
  })
  res.json(newBill)
})

router.put('/bills/:id/edit', (req, res) => {
  const updatedBill = db.bills.findByIdAndUpdate(req.params.id, {
    "title": req.body.title,
    "description": req.body.description,
    "dueDate": req.body.dueDate,
    "amount": req.body.amount
  })
  res.json(updatedBill)
})

router.delete('/bills/:id', (req, res) => {
    let selectedBill = db.bills.find(req.params.id)
    db.bills.delete(req.params.id)
    res.json(selectedBill)
})

router.patch('/bills/:id/paid', function (req, res) {
  const patchBill = db.bills.find(req.params.id)
  patchBill.paid = true
  res.json(patchBill)
})

router.patch('/bills/:id/unpaid', function (req, res) {
  const patchBill = db.bills.find(req.params.id)
  patchBill.paid = false
  res.json(patchBill)
})

module.exports = router