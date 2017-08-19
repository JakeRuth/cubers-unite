import {combineReducers} from 'redux';

import signUpReducer from './SignUp';
import confirmSignUpReducer from './ConfirmSignUp';

const AppReducer = combineReducers({
	signUp: signUpReducer,
	confirmSignUp: confirmSignUpReducer,
});

export default AppReducer;
