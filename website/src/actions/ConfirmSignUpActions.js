import {confirmSignUpAwsCognitoUser} from '../aws/aws-cognito-helper';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

export const UPDATE_USERNAME_CODE = 'UPDATE_USERNAME_CODE';
export const UPDATE_VERIFICATION_CODE = 'UPDATE_VERIFICATION_CODE';
export const CONFIRM_SIGN_UP_REQUEST_UPDATE = 'CONFIRM_SIGN_UP_REQUEST_UPDATE';

export function updateUsername(event) {
	return {
		type: UPDATE_USERNAME_CODE,
		text: event.target.value,
	};
}

export function updateVerificationCode(event) {
	return {
		type: UPDATE_VERIFICATION_CODE,
		text: event.target.value,
	};
}

export function confirmSignUp(verificationCode, username) {
	return (dispatch) => {
		dispatch({
			type: CONFIRM_SIGN_UP_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
		});

		confirmSignUpAwsCognitoUser(
			verificationCode,
			username,
			() => {
				dispatch({
					type: CONFIRM_SIGN_UP_REQUEST_UPDATE,
					status: ASYNC_STATUS.SUCCESS,
				});
			},
			() => {
				dispatch({
					type: CONFIRM_SIGN_UP_REQUEST_UPDATE,
					status: ASYNC_STATUS.FAILURE,
				});
			},
		);
	}
}
