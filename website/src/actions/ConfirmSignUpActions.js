export const UPDATE_VERIFICATION_CODE = 'UPDATE_VERIFICATION_CODE';
export const CONFIRM_SIGN_UP_REQUEST_UPDATE = 'CONFIRM_SIGN_UP_REQUEST_UPDATE';

export function updateVerificationCode(event) {
	return {
		type: UPDATE_VERIFICATION_CODE,
		text: event.target.value,
	};
}

export function confirmSignUp(verificationCode) {
	return (dispatch) => {
		// TODO
	}
}
