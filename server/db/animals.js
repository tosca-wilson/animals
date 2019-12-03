const connection = require('./connection')

function getAnimals(db = connection) {
  // nouns this,that,theother
  return db('animals').select()
    .then(animals => {
      // fix nouns here
      return animals.map(animal => {
        animal.nouns = animal.nouns.split(',')
        return animal
      })
    })
}

function addAnimal (newAnimal, db=connection) {
  console.log('hello')
  return db('animals')
  .insert({
    name: newAnimal.name,
    nouns: newAnimal.nouns
  })
  .then(newId => newId)
}

module.exports = {
  getAnimals,
  addAnimal
}
