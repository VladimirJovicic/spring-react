import * as actionTypes from '../actions/actionTypes'

const initState = {
    comments: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS_FROM_ARTICLE:
            return {
                ...state,
                comments: action.comments
            }
        default: return state;
    }
}

export default reducer;