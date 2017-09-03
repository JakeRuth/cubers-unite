import {combineReducers} from 'redux';

import appBodyReducer from './AppBodyReducer';
import confirmSignUpReducer from './ConfirmSignUp';
import loginReducer from './Login'
import signUpReducer from './SignUp';

const AppReducer = combineReducers({
	appBody: appBodyReducer,
	confirmSignUp: confirmSignUpReducer,
	signUp: signUpReducer,
	login: loginReducer,
});

export default AppReducer;
