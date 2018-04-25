//Create your reducers in reducers directory
//import your reducers and combine them in all Reducers which is provided to the store

import { combineReducers } from 'redux';
import loginReducer from './reducer-login';
const allReducers =  combineReducers({
    loginUser: loginReducer,
});

export default allReducers;