export const UPDATE_CURRENT_ROOM = 'home/UPDATE_CURRENT_ROOM';

export function updateCurrentRoom(room) {
	return {
		type: UPDATE_CURRENT_ROOM,
		room: room,
	};
}
