import {combineReducers} from 'redux';

import appBodyReducer from './AppBodyReducer';
import confirmSignUpReducer from './ConfirmSignUp';
import homePageReducer from './HomePage';
import loginReducer from './Login';
import signUpReducer from './SignUp';

const AppReducer = combineReducers({
	appBody: appBodyReducer,
	confirmSignUp: confirmSignUpReducer,
	homePage: homePageReducer,
	signUp: signUpReducer,
	login: loginReducer,
});

export default AppReducer;
