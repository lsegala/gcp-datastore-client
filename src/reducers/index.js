import { combineReducers } from 'redux';
import cases from './cases';
import loginReducer from './login';
import caseReducer from './case';
import growlMessages from './messages';

export default combineReducers({
    messages: growlMessages,
    cases: cases,
    case: caseReducer,
    login: loginReducer
});