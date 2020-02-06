import {combineReducers} from 'redux';

import {
    UPDATE_COMPONENT,
    ADD_COMPONENT_TO_LIST,
    UPDATE_COMPONENT_LIST,
    REFRESH_TEMPLATE_LIST
} from '../actions/formTemplate';

export default combineReducers({
    currentComponent: (state = null, {type, payload}) => {
        let currentState = state;

        if (type === UPDATE_COMPONENT) {
            currentState = payload;
        }

        return currentState;
    },
    components: (state = [], {type, payload}) => {
        let currentState = state;

        if (type === ADD_COMPONENT_TO_LIST) {
            currentState = [
                ...currentState,
                payload
            ]
        }
        
        if (type === UPDATE_COMPONENT_LIST) {
            currentState = [...payload];
        }

        return currentState;
    },
    formList: (state = [], {type, payload}) => {
        let currentState = state;

        if (type === REFRESH_TEMPLATE_LIST) {
            currentState = payload
        }
        return currentState;
    }
});
