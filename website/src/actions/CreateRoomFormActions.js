export const UPDATE_NAME = 'createRoomForm/UPDATE_NAME';

export function updateName(event) {
	return {
		type: UPDATE_NAME,
		text: event.target.value,
	};
}
