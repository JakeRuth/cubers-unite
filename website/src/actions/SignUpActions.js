import {signUpAwsCognitoUser} from '../aws/aws-cognito-helper';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

export const UPDATE_EMAIL = 'signUp/UPDATE_EMAIL';
export const UPDATE_USERNAME = 'signUp/UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'signUp/UPDATE_PASSWORD';
export const SIGN_UP_REQUEST_UPDATE = 'signUp/SIGN_UP_REQUEST_UPDATE';

export function updateEmail(event) {
	return {
		type: UPDATE_EMAIL,
		text: event.target.value,
	};
}

export function updateUsername(event) {
	return {
		type: UPDATE_USERNAME,
		text: event.target.value,
	};
}

export function updatePassword(event) {
	return {
		type: UPDATE_PASSWORD,
		text: event.target.value,
	};
}

export function signUp(username, email, password) {
	return (dispatch) => {
		dispatch({
			type: SIGN_UP_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
		});

		signUpAwsCognitoUser(
			email,
			username,
			password,
			(cognitoUser) => {
				dispatch({
					type: SIGN_UP_REQUEST_UPDATE,
					status: ASYNC_STATUS.SUCCESS,
					user: cognitoUser,
				});
			},
			() => {
				dispatch({
					type: SIGN_UP_REQUEST_UPDATE,
					status: ASYNC_STATUS.FAILURE,
				});
			},
		);
	}
}
