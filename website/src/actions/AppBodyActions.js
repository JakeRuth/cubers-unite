export const UPDATE_UN_AUTH_PAGE = 'appBody/UPDATE_UN_AUTH_PAGE';

export function updateUnAuthPage(page) {
	return {
		type: UPDATE_UN_AUTH_PAGE,
		page: page,
	};
}
