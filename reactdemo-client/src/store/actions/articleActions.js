import * as actionTypes from './actionTypes';
import axios from 'axios';

const successGetFullArticle = (article) => {
    return {
        type: actionTypes.GET_FULL_ARTICLE,
        article: article
    }
}

const successGetAllArticle = (articles) => {
    return {
        type: actionTypes.GET_ALL_ARTICLES,
        articles: articles
    }
}

export const getFullArticle = (id) => {
    return dispatch => {
        axios.get('/article/getArticleFromComment/' + id)
            .then(response => {
                dispatch(successGetFullArticle(response.data))
            })
            .catch()
    }
}

export const getAllArticles = (id) => {
    return dispatch => {
        axios.get('/article/getAllArticles/' + id)
            .then(response => {
                dispatch(successGetAllArticle(response.data))
            })
            .catch()
    }
}