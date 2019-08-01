import * as actionType from './types';
import axios from 'axios';
import events from '../../api/events';


export const setToken = (data) => {
    return {
        type: actionType.SET_TOKEN,
        data
    }
}

export const getEvents = (data) => {
    return {
        type: 'GET_EVENTS',
        payload: data
    }
};

export const fetchEventsData = (props) => {
    return (dispatch) => {
        console.log(axios.get('http://localhost:8000/api/events/'));
        return axios.get('http://localhost:8000/api/events/')
            .then(res => {
                dispatch(getEvents(res.data))
            })
    }
}