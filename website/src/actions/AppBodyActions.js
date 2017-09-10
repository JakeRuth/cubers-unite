export const UPDATE_UN_AUTH_PAGE = 'appBody/UPDATE_UN_AUTH_PAGE';
export const SET_IS_USER_AUTHENTICATED = '/appBody/SET_IS_USER_AUTHENTICATED';

export function updateUnAuthPage(page) {
	return {
		type: UPDATE_UN_AUTH_PAGE,
		page: page,
	};
}

export function setIsUserAuthenticated(value) {
	return {
		type: SET_IS_USER_AUTHENTICATED,
		value: value,
	};
}
