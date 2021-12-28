const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/movies', (req, res) => {
  const movies = db.movies.findAll()
  res.json(movies)
})

router.get('/movies/:id', (req, res) => {
  const movie = db.movies.find(req.params.id)
  res.json(movie)
})

// router.post('/movies', (req, res) => {
//   const newMovie = db.movies.insert({
//     "title": req.body.title,
//     "subtitle": req.body.subtitle,
//     "author": req.body.author,
//     "published": req.body.published,
//     "publisher": req.body.publisher,
//     "pages": req.body.pages,
//     "description": req.body.description,
//     "website": req.body.website,
//     "inCart": false
//   })
//   res.json(newMovie)
// })

router.patch('/movies/cart/add/:id', function(req, res) {
  const movie = db.movies.find(req.params.id)
  movie.inCart = true
  res.json(movie)
})

router.patch('/movies/cart/remove/:id', function(req, res) {
  const movie = db.movies.find(req.params.id)
  movie.inCart = false
  res.json(movie)
})

router.delete('/movies/:id', (req, res) => {
  let selectedMovie = db.movies.find(req.params.id)
  db.movies.delete(req.params.id)
  res.json(selectedMovie)

})



module.exports = router
