import {
	UPDATE_USERNAME,
	UPDATE_PASSWORD,
	LOGIN_REQUEST_UPDATE,
	LOGOUT,
} from '../actions/LoginActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

const initialState = {
	username: '',
	password: '',
	loginRequestStatus: ASYNC_STATUS.READY,
	userIdToken: '',
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
		case LOGIN_REQUEST_UPDATE:
			const isSuccessful = action.status === ASYNC_STATUS.SUCCESS;
			return {
				...state,
				userIdToken: isSuccessful ? action.userIdToken : state.userIdToken,
				password: isSuccessful ? '' : state.password,
				loginRequestStatus: action.status,
			};
		case LOGOUT:
			return {
				...state,
				userIdToken: '',
			};
		default:
			return state;
	}
}

export default loginReducer;
