import request from 'superagent'

const animals = 'http://localhost:3000/api/animals'

export function getApiAnimals() {
    return request
    .get(animals)
    .then(res => res.body)
}