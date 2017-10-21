import {authenticateAwsCognitoUser} from '../aws/aws-cognito-helper';
import {
	localStoragePut,
	localStorageClear,
	localStorageGet,
} from '../localStorageWrapper';

import {ASYNC_STATUS} from '../constants/AsyncStatus';
import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

export const UPDATE_USERNAME = 'login/UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'login/UPDATE_PASSWORD';
export const LOGIN_REQUEST_UPDATE = 'login/LOGIN_REQUEST_UPDATE';
export const CHECK_USER_LOGIN_STATUS = 'login/CHECK_USER_LOGIN_STATUS';
export const LOGOUT = 'login/LOGOUT';

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

export function logout() {
	localStorageClear();
	return {
		type: LOGOUT,
	};
}

export function checkUserLoginStatus() {
	return {
		type: CHECK_USER_LOGIN_STATUS,
		userIdToken: localStorageGet(LOCAL_STORAGE_KEYS.USER_ID),
	}
}

export function authenticate(username, password) {
	return (dispatch) => {
		dispatch({
			type: LOGIN_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
		});

		authenticateAwsCognitoUser(
			username,
			password,
			(response) => {
				localStoragePut(LOCAL_STORAGE_KEYS.USER_ID, response.idToken.jwtToken);
				dispatch({
					type: LOGIN_REQUEST_UPDATE,
					userIdToken: response.idToken.jwtToken,
					status: ASYNC_STATUS.SUCCESS,
				});
			},
			(err) => {
				alert(err);
				dispatch({
					type: LOGIN_REQUEST_UPDATE,
					status: ASYNC_STATUS.FAILURE,
				});
			},
		);
	}
}
