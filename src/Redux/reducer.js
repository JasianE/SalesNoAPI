const reducer = (state = {isAuthenticated: false, done: false}, action) => {
    switch(action.type){
        case 'AUTHENTICATE':
            const copyOfState = {...state}
            copyOfState.isAuthenticated = true
            return copyOfState
        case 'PREVENT':
            const copy = {...state}
            copy.done = true
            return copy
        default:
            return state
    }
}

export const authenticate = () => {
    return {
        type: 'AUTHENTICATE'
    }
}

export const done = () => {
    return {
        type: 'PREVENT'
    }
}

export default reducer