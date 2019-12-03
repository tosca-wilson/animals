import { getApiAnimals, postApiAnimal } from '../apis/apiFetchAnimals'

export const displayAnimals = (animals) => {
    return {
        type: 'RECEIVE_ANIMALS', 
        animals: animals
    }
}

export function fetchAnimals () {
    return (dispatch) => {
        getApiAnimals()
        .then(animals => {
        dispatch(displayAnimals (animals))
        })
    }
}

// export function displayNewAnimal (newAnimal) {
//     return {
//         type: 'ADD_ANIMAL',
//         newAnimal :newAnimal
//     }
// }

export function addAnimal (newAnimal) {
    // console.log(newAnimal)
    return (dispatch) => {
        postApiAnimal(newAnimal)
        .then(id => {
        dispatch(fetchAnimals())
        })
    }
}