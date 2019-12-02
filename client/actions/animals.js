import { getApiAnimals } from '../apis/apiFetchAnimals'

export const displayAnimals = (animals) => {
    return {
        type: 'RECEIVE_ANIMALS', 
        animals: animals
    }
}

export function fetchAnimals () {
    console.log('fetch animals')
    return (dispatch) => {
        console.log('fetching animals')
        getApiAnimals()
        .then(animals => {
        console.log('fetched animals')
        dispatch(displayAnimals (animals))
        })
    }
}