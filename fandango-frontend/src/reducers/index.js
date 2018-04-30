//Create your reducers in reducers directory
//import your reducers and combine them in all Reducers which is provided to the store

import { combineReducers } from 'redux';
import loginReducer from './reducer-login';
import movieReducer from './reducer-movie';
import reviewReducer from './reducer-review';
import bookingReducer from './reducer-booking';
import criteriaReducer from './reducer-criteria';

const allReducers =  combineReducers({
    loginUser: loginReducer,
    selectedMovie: movieReducer,
    selectedReview: reviewReducer,
    searchCriteria: criteriaReducer,
    doneBooking: bookingReducer

});

export default allReducers;