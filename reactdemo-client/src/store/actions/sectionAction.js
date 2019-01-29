import * as actionTypes from './actionTypes';
import axios from 'axios'

export const successAddedSection = (newSection) => {
    window.location.replace('/')
    return {
        type: actionTypes.ADD_NEW_SECTION,
        newSection: newSection
    }
}

const successGetAllSections = (sections) => {
    return {
        type: actionTypes.GET_ALL_SECTIONS,
        sections: sections
    }
}

export const addSection = (newSection) => {
    return dispatch => {
        axios.post('/section/insert', newSection)
            .then(response => {
                dispatch(successAddedSection(response.data));

            })
            .catch()
    }
}

export const getAllSections = () => {
    return dispatch => {
        axios.get('/section/getAllSections')
            .then(response => {
                dispatch(successGetAllSections(response.data))
            })
    }
}


export const updateInput = (value, type) => {
    return {
        type: actionTypes.UPDATE_INPUT,
        value: value,
        inputType: type
    }
}

export const setInputToTrue = (type) => {
    return {
        type: actionTypes.VALID_INPUT,
        inputType: type
    }
}

export const checkInputs = (validInputs) => {
    return {
        type: actionTypes.ARE_INPUTS_VALID,
        validInputs: validInputs
    }
}

export const changeShow = () => {
    return {
        type: actionTypes.CHANGE_SHOW_VIEW,
    }
}