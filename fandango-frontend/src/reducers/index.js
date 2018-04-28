//Create your reducers in reducers directory
//import your reducers and combine them in all Reducers which is provided to the store

import { combineReducers } from 'redux';
import loginReducer from './reducer-login';
import movieReducer from './reducer-movie';
import criteriaReducer from './reducer-criteria';

const allReducers =  combineReducers({
    loginUser: loginReducer,
    selectedMovie: movieReducer,
    searchCriteria: criteriaReducer

});

export default allReducers;