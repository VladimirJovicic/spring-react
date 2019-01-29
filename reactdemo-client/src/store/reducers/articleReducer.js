import * as actionTypes from '../actions/actionTypes';

const initState = {
    fullArticle: {},
    articles: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_FULL_ARTICLE:
            return {
                ...state,
                fullArticle: action.article
            }

        case actionTypes.GET_ALL_ARTICLES:
            return {
                ...state,
                articles: action.articles
            }
        default: return state;
    }
}

export default reducer;