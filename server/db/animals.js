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

module.exports = {
  getAnimals,
}
