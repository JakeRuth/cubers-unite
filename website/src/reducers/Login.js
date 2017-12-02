import {
	UPDATE_USERNAME,
	UPDATE_PASSWORD,
	LOGIN_REQUEST_UPDATE,
	ATTEMPT_REFRESH_USER_SESSION_UPDATE,
} from '../actions/LoginActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

const initialState = {
	username: '',
	password: '',
	loginRequestStatus: ASYNC_STATUS.READY,
	attemptRefreshUserSessionRequestStatus: ASYNC_STATUS.READY,
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
		case ATTEMPT_REFRESH_USER_SESSION_UPDATE:
			return {
				...state,
				attemptRefreshUserSessionRequestStatus: action.status,
			}
		case LOGIN_REQUEST_UPDATE:
			const isSuccessful = action.status === ASYNC_STATUS.SUCCESS;
			return {
				...state,
				password: isSuccessful ? '' : state.password,
				loginRequestStatus: action.status,
			};
		default:
			return state;
	}
}

export default loginReducer;
