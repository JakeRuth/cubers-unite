import {
	TOGGLE_CREATE_ROOM_MODAL,
	UPDATE_NAME,
} from '../actions/HomePageActions.js';

const initialState = {
	name: '',
	showCreateRoomModal: false,
};

function homePageReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_CREATE_ROOM_MODAL:
			return {
				...state,
				name: '',
				showCreateRoomModal: !state.showCreateRoomModal,
			};
		case UPDATE_NAME:
      return {
        ...state,
        name: action.text,
      };
		default:
			return state;
	}
}

export default homePageReducer;
