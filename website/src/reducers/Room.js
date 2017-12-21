import {
	UPDATE_CURRENT_ROOM,
} from '../actions/RoomActions.js';

const initialState = {
	currentRoom: null,
};

export function roomReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_CURRENT_ROOM:
			return {
				...state,
				currentRoom: action.room,
			};
		default:
			return state;
	}
}
