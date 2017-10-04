import {
	TOGGLE_CREATE_ROOM_MODAL,
} from '../actions/HomePageActions.js';

const initialState = {
	showCreateRoomModal: false,
};

function homePageReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_CREATE_ROOM_MODAL:
			return {
				...state,
				showCreateRoomModal: !state.showCreateRoomModal,
			};
		default:
			return state;
	}
}

export default homePageReducer;
