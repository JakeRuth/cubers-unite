import {
  UPDATE_UN_AUTH_PAGE,
} from '../actions/AppBodyActions.js';
import {UN_AUTH_PAGE} from '../constants/UnAuthPage';

const initialState = {
  currentUnAuthPage: UN_AUTH_PAGE.LOGIN,
};

function appBodyReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_UN_AUTH_PAGE:
			return {
				...state,
        currentUnAuthPage: action.page,
			};
		default:
			return state;
	}
}

export default appBodyReducer;
