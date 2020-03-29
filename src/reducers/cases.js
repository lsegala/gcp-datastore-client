import axios from 'axios';
import { showGrowl, ACTIONS, API_BASE_URL } from '../actions';

const http = axios.create({
    baseURL : API_BASE_URL
});

export const loadCases = () => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.LOAD_CASES,
            payload: http.get(`${API_BASE_URL}/casos`, {
                headers: { 'Authorization': 'Bearer '+localStorage.getItem('token_app') }
            })
        })
        .catch(() => {
            dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Erro de comunicação com o serviço!'}))
        });
    }
};

export const deleteCase = (id) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.DELETE_CASE,
            payload: http.delete(`${API_BASE_URL}/casos/${id}`, {
                headers: { 'Authorization': 'Bearer '+localStorage.getItem('token_app') }
            })
        })
        .then(response => {
            dispatch(showGrowl({severity: 'success', summary: 'Sucesso', detail: 'Caso excluído com sucesso!'}))
            dispatch(loadCases());
        })
        .catch(() => {
            dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Erro ao tentar excluir caso!'}))
        });
    }
};

const cases = (state = {}, action) => {
    switch(action.type){
        case `${ACTIONS.LOAD_CASES}_FULFILLED`:
            return action.payload.data;
        default:
            return state;
    }
};

export default cases;