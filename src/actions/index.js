export const API_BASE_URL = 'http://localhost:8081';

export const ACTIONS = {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    ADD_CASE: 'ADD_CASE',
    UPD_CASE: 'UPD_CASE',
    DO_LOGIN: 'DO_LOGIN',
    LOGIN: 'LOGIN',
    LOAD_CASES: 'LOAD_CASES',
    LOAD_CASE: 'LOAD_CASE',
    NEW_CASE: 'NEW_CASE',
    DELETE_CASE: 'DELETE_CASE'
}

export function acessoToBoolean (acessoStr = '') {
    return acessoStr === 'PUB';
}

export function acessoToEnum (acessoStr = false) {
    return acessoStr ? 'PUB' : 'PRI';
}

export function acessoToString (acessoStr = '') {
    return acessoStr === 'PUB' ? 'Público' : 'Privado';
}

//action
export const showMessage = (message) => ({
    type: ACTIONS.SHOW_MESSAGE,
    message: message
});

export function showGrowl(message) {
    return showMessage(message);
};

export const doLogin = (obj) => ({
    type: ACTIONS.DO_LOGIN,
    obj
});