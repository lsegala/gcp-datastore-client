import axios from 'axios';
import { showGrowl, acessoToEnum, ACTIONS, API_BASE_URL } from '../actions';

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
            console.log(response);
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

const caseReducer = (state = {}, action) => {
    switch(action.type){
        case `${ACTIONS.ADD_CASE}_FULFILLED`:
            console.log('caso fulfilled');
            return state;
        case 'UPD_CASE':
            return {
                id: action.id,
                folder: action.folder,
                clients: action.clients,
                title: action.title,
                labels: action.labels,
                description: action.description,
                owner: action.owner,
                access: action.access,
                inclusionDate: action.inclusionDate
            };
        default:
            return {
                folder: '',
                clients: '',
                title: '',
                labels: [],
                description: '',
                owner: '',
                access: '',
                inclusionDate: new Date()
            };
    }
};

export default caseReducer;