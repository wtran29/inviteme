import { combineReducers } from 'redux';
import * as actionType from '../actions/types';

const tokenInitialState = null;
const token = (state = tokenInitialState, action) => {
    switch (action.type) {
        case actionType.SET_TOKEN:
            return action.data;
        default:
            return state;
    }
}

/* const eventsReducer = () => {
    return [
    ]
} */

const eventInitialState = null;
const selectedEventReducer = (state = eventInitialState, action) => {
    if (action.type === 'GET_EVENTS') {
        console.log(action.payload);
        return action.payload;
    }
    return state;
};

/* export default combineReducers({
    
    selectedEvent: selectedEventReducer
}); */

const appReducer = combineReducers({
    token,
    selectedEventReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;

