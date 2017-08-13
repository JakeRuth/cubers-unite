export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export function updateEmail(text) {
	return {
		type: UPDATE_EMAIL,
		text: text,
	};
}

export function updateUsername(text) {
	return {
		type: UPDATE_USERNAME,
		text: text,
	};
}

export function updatePassword(text) {
	return {
		type: UPDATE_PASSWORD,
		text: text,
	};
}
