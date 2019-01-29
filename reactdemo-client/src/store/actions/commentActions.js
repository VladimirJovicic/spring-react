import * as actionTypes from './actionTypes';
import axios from 'axios';


const successGetAllComments = (comments) => {
    return {
        type: actionTypes.GET_COMMENTS_FROM_ARTICLE,
        comments: comments
    }
}

export const getAllComments = (id) => {
    return dispatch => {
        axios.get('/comments/getAllCommentsFromArticle/' + id)
            .then(response => {
                dispatch(successGetAllComments(response.data))
            })
    }
}