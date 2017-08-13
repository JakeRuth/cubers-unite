import {UPDATE_EMAIL, UPDATE_USERNAME, UPDATE_PASSWORD} from '../sign-up/Actions.js';

const initialState = {
	email: '',
	username: '',
	password: '',
};

function signUpReducer(state = initialState, action) {
	switch(action) {
		case UPDATE_EMAIL:
			return {
				...state,
				email: action.text,
			};
		case UPDATE_USERNAME:
			return {
				...state,
				username: action.text,
			};
		case UPDATE_PASSWORD:
			return {
				...state,
				password: action.text,
			};
		default:
			return state;
	}
}

export default signUpReducer;
