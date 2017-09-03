import {
	UPDATE_USERNAME,
	UPDATE_PASSWORD,
} from '../actions/LoginActions.js';

const initialState = {
	username: '',
	password: '',
};

function loginReducer(state = initialState, action) {
	switch(action.type) {
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

export default loginReducer;
