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
  return db('animals')
  .insert({
    name: newAnimal.name,
    nouns: newAnimal.nouns
  })
  .then(newId => newId)
}

function deleteAnimal (id, db=connection) {
  return db('animals')
  .where('id', id)
  .delete()
}

module.exports = {
  getAnimals,
  addAnimal,
  deleteAnimal, 
}
