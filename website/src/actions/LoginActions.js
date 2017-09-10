import {authenticateAwsCognitoUser} from '../aws/aws-cognito-helper';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

export const UPDATE_USERNAME = 'login/UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'login/UPDATE_PASSWORD';
export const LOGIN_REQUEST_UPDATE = 'login/LOGIN_REQUEST_UPDATE';

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
				console.log(response);
			    console.log('access token + ' + response.getAccessToken().getJwtToken());
			    console.log('idToken + ' + response.idToken.jwtToken);
				dispatch({
					type: LOGIN_REQUEST_UPDATE,
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
