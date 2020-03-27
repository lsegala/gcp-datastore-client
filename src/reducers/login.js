import axios from 'axios';
import { showGrowl, ACTIONS, API_BASE_URL } from '../actions';

const http = axios.create({
    baseURL : API_BASE_URL
});

export const loginAction = (form) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.LOGIN,
            payload: http.post(`${API_BASE_URL}/users/signin?username=${form?.state?.login?.name}&password=${form?.state?.login?.password}`)
        })
        .then(response => response?.value)
        .then(response => {
            if(response?.status === 200 && response?.data?.value){
                localStorage.setItem('token_app', response.data.value);
                dispatch(showGrowl({severity: 'success', summary: 'Sucesso', detail: 'Login realizado com sucesso!'}));
                setTimeout(()=>window.location.href='/', 1000);
            }else{
                dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Verifique seu nome de usuário ou senha!'}));
            }
        }).catch(() => {
            dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Verifique seu nome de usuário ou senha!'}))
        });
    }
};

const loginReducer = (state = {}, action) => {
    switch(action.type){
        case `${ACTIONS.LOGIN}_FULFILLED`:
            return state;
        case `${ACTIONS.LOGIN}_REJECTED`:
            return state;
        default:
            return state;
    }
}
  
export default loginReducer;