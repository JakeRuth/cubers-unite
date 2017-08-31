import {combineReducers} from 'redux';

import appBodyReducer from './AppBodyReducer';
import confirmSignUpReducer from './ConfirmSignUp';
import signUpReducer from './SignUp';

const AppReducer = combineReducers({
	appBody: appBodyReducer,
	confirmSignUp: confirmSignUpReducer,
	signUp: signUpReducer,
});

export default AppReducer;
