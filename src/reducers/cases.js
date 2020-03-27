import axios from 'axios';
import { showGrowl, ACTIONS, API_BASE_URL } from '../actions';

const http = axios.create({
    baseURL : API_BASE_URL
});

export const loadCases = () => {
    return http.get(`${API_BASE_URL}/casos`, {
        headers: {'Authorization': 'Bearer '+localStorage.getItem('token_app')}
    });
};

export const deleteCase = (id) => {
    return http.delete(`${API_BASE_URL}/casos/${id}`, {
        headers: {'Authorization': 'Bearer '+localStorage.getItem('token_app')}
    });
}

const cases = (state = [], action) => {
    switch(action.type){
        case `${ACTIONS.LOAD_CASES}_FULFILLED`:
            return action.payload.data;
        case `${ACTIONS.LOAD_CASES}_REJECTED`:
            return state;
        default:
            return state;
    }
};

export default cases;