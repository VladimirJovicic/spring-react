import * as actionTypes from '../actions/actionTypes';

const initState = {
    sections: [],
    show: false,
    newSection: {
        name: "",
        desctiption: "",
        author: localStorage.getItem('username')
    },
    validInputs: {
        name: true,
        desctiption: true
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_INPUT:
            return {
                ...state,
                newSection: {
                    ...state.newSection,
                    [action.inputType]: action.value
                }
            }

        case actionTypes.VALID_INPUT:
            return {
                ...state,
                validInputs: {
                    ...state.validInputs,
                    [action.inputType]: true
                }
            }

        case actionTypes.ARE_INPUTS_VALID:
            return {
                ...state,
                validInputs: action.validInputs
            }

        case actionTypes.ADD_NEW_SECTION:
            return {
                ...state,
                newSection: action.newSection
            }

        case actionTypes.GET_ALL_SECTIONS:
            return {
                ...state,
                sections: action.sections
            }

        case actionTypes.CHANGE_SHOW_VIEW:
            const show = !state.show;
            return {
                ...state,
                show: show
            }

        default: return state;
    }
}

export default reducer;