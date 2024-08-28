import {combineReducers } from 'redux';
import loginReducer from './Actions/loginReducer';
import userReducer from './ReduxApi/userReducer';


const rootReducer = combineReducers({
    login: loginReducer,
    users: userReducer})


export default rootReducer