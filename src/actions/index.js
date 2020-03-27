export const API_BASE_URL = 'http://localhost:8081';

export const ACTIONS = {
    SHOW_MESSAGE: 'SHOW_MESSAGE',
    ADD_CASE: 'ADD_CASE',
    UPD_CASE: 'UPD_CASE',
    DO_LOGIN: 'DO_LOGIN',
    LOGIN: 'LOGIN',
    LOAD_CASES: 'LOAD_CASES'
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

export const addCase = caseObj => ({
    type: ACTIONS.ADD_CASE,
    caseObj
});

export const updCase = caseObj => ({
    type: ACTIONS.UPD_CASE,
    caseObj
});

export const doLogin = (obj) => ({
    type: ACTIONS.DO_LOGIN,
    obj
});