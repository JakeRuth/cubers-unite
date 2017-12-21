import {combineReducers} from 'redux';

import {confirmSignUpReducer} from './ConfirmSignUp';
import {homePageReducer} from './Home';
import {loginReducer} from './Login';
import {roomReducer} from './Room';
import {signUpReducer} from './SignUp';

const AppReducer = combineReducers({
	confirmSignUp: confirmSignUpReducer,
	homePage: homePageReducer,
	login: loginReducer,
	room: roomReducer,
	signUp: signUpReducer,
});

export default AppReducer;
