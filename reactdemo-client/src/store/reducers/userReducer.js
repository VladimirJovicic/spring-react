import * as actionTypes from '../actions/actionTypes'

const initialState = {
    users: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_USERS:
            return {
                ...state,
                users: action.users
            }
        case actionTypes.GET_ONE_USER:
            return {
                ...state,
                user: action.user
            }
        default: return state;
    }
}

export default reducer;