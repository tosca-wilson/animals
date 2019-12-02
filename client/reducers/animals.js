const initialState = []

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_ANIMALS':
            return action.animals
        default:
            return state
    }
}

export default reducer