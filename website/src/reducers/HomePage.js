import {
	TOGGLE_CREATE_ROOM_MODAL,
	UPDATE_NAME,
	CREATE_ROOM_REQUEST_UPDATE,
} from '../actions/HomePageActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

const initialState = {
	name: '',
	showCreateRoomModal: false,
	createRoomRequestStatus: ASYNC_STATUS.READY,
};

function homePageReducer(state = initialState, action) {
	switch(action.type) {
		case TOGGLE_CREATE_ROOM_MODAL:
			return {
				...state,
				name: '',
				showCreateRoomModal: !state.showCreateRoomModal,
				createRoomRequestStatus: ASYNC_STATUS.READY,
			};
		case UPDATE_NAME:
      return {
        ...state,
        name: action.text,
      };
		case CREATE_ROOM_REQUEST_UPDATE:
			return {
				...state,
				createRoomRequestStatus: action.status,
			};
		default:
			return state;
	}
}

export default homePageReducer;
