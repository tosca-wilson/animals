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

router.post('/', (request, response) => {
  const newAnimal = request.body
  db.addAnimal(newAnimal)
  .then(id => {
    response.json({id:id})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Something is broken' })
  })
})

router.delete('/:id', (request, response) => {
  const animalId = request.params.id

  db.deleteAnimal(animalId)
  .then(animal => {
    response.json(animal)
  })
})

module.exports = router
