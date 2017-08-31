import {
	UPDATE_EMAIL,
	UPDATE_USERNAME,
	UPDATE_PASSWORD,
	SIGN_UP_REQUEST_UPDATE,
} from '../actions/SignUpActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

const initialState = {
	email: '',
	username: '',
	password: '',
	signUpRequestStatus: ASYNC_STATUS.READY,
	user: null,
};

function signUpReducer(state = initialState, action) {
	switch(action.type) {
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
		case SIGN_UP_REQUEST_UPDATE:
			return {
				...state,
				signUpRequestStatus: action.status,
				user: action.user,
			}
		default:
			return state;
	}
}

export default signUpReducer;
