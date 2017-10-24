import {
	UPDATE_NAME,
} from '../actions/CreateRoomFormActions.js';

const initialState = {
	name: '',
};

function createRoomForm(state = initialState, action) {
	switch(action.type) {
		case UPDATE_NAME:
      return {
        ...state,
        name: action.text,
      };
		default:
			return state;
	}
}

export default createRoomForm;
