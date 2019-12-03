import { getApiAnimals, postApiAnimal, deleteApiAnimal } from '../apis/apiFetchAnimals'

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
    return (dispatch) => {
        postApiAnimal(newAnimal)
        .then(id => {
        dispatch(fetchAnimals())
        })
    }
}

export const delAnimal = (animal) => {
    return {
        type: 'DEL_ANIMAL',
        animal: animal
    }
}

export function deleteAnimal (animal) {
    return (dispatch) => {
        deleteApiAnimal(animal.id)
        .then(() => {
            dispatch(fetchAnimals())
        })
    }
}