import request from 'superagent'

const animals = '/api/animals'

export function getApiAnimals() {
    return request
    .get(animals)
    .then(res => res.body)
}

export function postApiAnimal(animal) {
    return request
    .post(animals)
    .send({
        name: animal.name,
        nouns: animal.nouns
    })
    .then(res => res.body)
}

