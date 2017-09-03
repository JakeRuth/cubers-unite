export const UPDATE_USERNAME = 'login/UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'login/UPDATE_PASSWORD';

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

export function authenticate(verificationCode, username) {
	return (dispatch) => {
		console.log('placeholder');
	}
}
