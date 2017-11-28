import {
	authenticateAwsCognitoUser,
	refreshAwsCognitoUserSession,
} from '../aws/aws-cognito-helper';
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
export const ATTEMPT_REFRESH_USER_SESSION_UPDATE = 'login/ATTEMPT_REFRESH_USER_SESSION_UPDATE';
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

export function attemptRefreshUserSession() {
	return (dispatch) => {
		dispatch({
			type: ATTEMPT_REFRESH_USER_SESSION_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
		});

		const refreshToken = localStorageGet(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
		const username = localStorageGet(LOCAL_STORAGE_KEYS.USERNAME);

		// do not attempt to refresh the session if no cached token/username exists
		if (!refreshToken || !username) {
			dispatch({
				type: ATTEMPT_REFRESH_USER_SESSION_UPDATE,
				status: ASYNC_STATUS.FAILURE,
			});
			return;
		}

		refreshAwsCognitoUserSession(refreshToken, username, (err, userSession) => {
			if (err) {
				dispatch({
					type: ATTEMPT_REFRESH_USER_SESSION_UPDATE,
					status: ASYNC_STATUS.FAILURE,
				});
			} else {
				localStoragePut(LOCAL_STORAGE_KEYS.USER_ID, userSession.idToken.jwtToken);
				localStoragePut(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, userSession.refreshToken.token);
				dispatch({
					type: ATTEMPT_REFRESH_USER_SESSION_UPDATE,
					userIdToken: userSession.idToken.jwtToken,
					status: ASYNC_STATUS.SUCCESS,
				});
			}
		})
	}
}

export function authenticate(username, password) {
	return (dispatch) => {
		dispatch({
			type: LOGIN_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
		});

		// put username in local storage, if the request was unsuccessful it doesn't matter
		// since the next login will override this bad value
		localStoragePut(LOCAL_STORAGE_KEYS.USERNAME, username);

		authenticateAwsCognitoUser(
			username,
			password,
			(response) => {
				localStoragePut(LOCAL_STORAGE_KEYS.USER_ID, response.idToken.jwtToken);
				localStoragePut(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, response.refreshToken.token);
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
