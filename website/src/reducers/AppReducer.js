import {combineReducers} from 'redux';

import confirmSignUpReducer from './ConfirmSignUp';
import homePageReducer from './Home';
import loginReducer from './Login';
import signUpReducer from './SignUp';

const AppReducer = combineReducers({
	confirmSignUp: confirmSignUpReducer,
	homePage: homePageReducer,
	signUp: signUpReducer,
	login: loginReducer,
});

export default AppReducer;
