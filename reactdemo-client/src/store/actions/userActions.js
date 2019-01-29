import * as actionTypes from './actionTypes';
import axios from 'axios'

export const successGetAllUsers = (users) => {
    return {
        type: actionTypes.GET_ALL_USERS,
        users: users
    }
}

export const successGetOneUser = (user) => {
    return {
        type: actionTypes.GET_ONE_USER,
        user: user
    }
}

export const getAllUsers = () => {
    return dispatch => {
        axios.get('/user/getAllUsers')
            .then(response => {
                dispatch(successGetAllUsers(response.data))
            })
            .catch()
    }
}

export const getOneUser = () => {
    return dispatch => {
        axios.get('/user/getUser')
            .then(response => {
                dispatch(successGetOneUser(response.data))
            })
            .catch()
    }
}