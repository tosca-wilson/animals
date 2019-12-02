const express = require('express')
const router = express.Router()

const db = require('../db/animals')

// base URL: /api/animals

router.get('/', (request, response) => {
  db.getAnimals()
    .then(animals => {
      response.json(animals)
    })
    .catch(err => {
      console.log(err)
      response.status(500).json({message: 'Something went wrong.'})
    })
})

module.exports = router
