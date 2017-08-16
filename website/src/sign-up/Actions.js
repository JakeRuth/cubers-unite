export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

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
