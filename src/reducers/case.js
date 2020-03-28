import axios from 'axios';
import { showGrowl, acessoToEnum, acessoToBoolean, ACTIONS, API_BASE_URL } from '../actions';

const http = axios.create({
    baseURL : API_BASE_URL
});

export const addCase = (form) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.ADD_CASE,
            payload: http.post(`${API_BASE_URL}/casos`, {
                acesso: acessoToEnum(form?.access),
                clientes: form.clients,
                dataCriacao: form.inclusionDate,
                descricao: form.description,
                observacoes: form.observation,
                pasta: form.folder,
                responsavel: form.owner,
                titulo: form.title,
                etiqueta: form.labels
            }, {
                headers: { 'Authorization': 'Bearer '+localStorage.getItem('token_app') }
            })
        })
        .then(response => response?.value)
        .then(response => {
            if(response?.status === 200){
                dispatch(showGrowl({severity: 'success', summary: 'Sucesso', detail: 'Caso adicionado com sucesso!'}));
            }else{
                dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Erro ao tentar incluir o caso!'}));
            }
        }).catch(() => {
            dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Erro de comunicação com o serviço!'}))
        });
    }
};

export const loadCase = (id) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.LOAD_CASE,
            payload: http.get(`${API_BASE_URL}/casos/${id}`, {
                headers: { 'Authorization': 'Bearer '+localStorage.getItem('token_app') }
            })
        })
        .catch(() => {
            dispatch(showGrowl({severity: 'error', summary: 'Erro', detail: 'Erro de comunicação com o serviço!'}))
        });
    }
};

export const newCase = () => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.NEW_CASE
        });
    }
}

const caseReducer = (state = {}, action) => {
    switch(action.type){
        case `${ACTIONS.ADD_CASE}_FULFILLED`:
            return state;
        case `${ACTIONS.LOAD_CASE}_FULFILLED`:
            return {
                id: action.payload?.data?.id,
                folder: action.payload?.data?.pasta,
                clients: action.payload?.data?.clientes,
                title: action.payload?.data?.titulo,
                labels: action.payload?.data?.etiqueta,
                description: action.payload?.data?.descricao,
                observation: action.payload?.data?.observacoes,
                owner: action.payload?.data?.responsavel,
                access: acessoToBoolean(action.payload?.data?.acesso),
                inclusionDate: new Date(action.payload?.data?.dataCriacao)
            };
        case ACTIONS.NEW_CASE:
            return {
                id: null,
                folder: '',
                clients: '',
                title: '',
                labels: [],
                description: '',
                observation: '',
                owner: '',
                access: acessoToBoolean(false),
                inclusionDate: new Date()
            };
        default:
            return {
                folder: '',
                clients: '',
                title: '',
                labels: [],
                description: '',
                owner: '',
                access: false,
                inclusionDate: new Date()
            };
    }
};

export default caseReducer;