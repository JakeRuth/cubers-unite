import {combineReducers} from 'redux';

import signUpReducer from './SignUp';

const AppReducer = combineReducers({
	signUp: signUpReducer,
});

export default AppReducer;
