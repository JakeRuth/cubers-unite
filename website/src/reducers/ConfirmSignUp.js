import {
	UPDATE_USERNAME,
	UPDATE_VERIFICATION_CODE,
	CONFIRM_SIGN_UP_REQUEST_UPDATE,
} from '../actions/ConfirmSignUpActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

const initialState = {
	username: '',
	verificationCode: '',
	confirmSignUpRequestStatus: ASYNC_STATUS.READY,
};

function confirmSignUpReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_USERNAME:
			return {
				...state,
				username: action.text,
			};
		case UPDATE_VERIFICATION_CODE:
			return {
				...state,
				verificationCode: action.text,
			};
		case CONFIRM_SIGN_UP_REQUEST_UPDATE:
			return {
				...state,
				confirmSignUpRequestStatus: action.status,
			}
		default:
			return state;
	}
}

export default confirmSignUpReducer;
