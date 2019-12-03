const initialState = []

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_ANIMALS':
            return action.animals
        case 'ADD_ANIMAL':
            return [...state, action.newAnimal]
        
        default:
            return state
    }
}

export default reducer