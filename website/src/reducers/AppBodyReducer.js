import {
  UPDATE_UN_AUTH_PAGE,
  SET_IS_USER_AUTHENTICATED,
} from '../actions/AppBodyActions.js';
import {UN_AUTH_PAGE} from '../constants/UnAuthPage';

const initialState = {
  isUserAuthenticated: false,
  currentUnAuthPage: UN_AUTH_PAGE.SIGN_UP,
};

function appBodyReducer(state = initialState, action) {
	switch(action.type) {
		case UPDATE_UN_AUTH_PAGE:
			return {
				...state,
        currentUnAuthPage: action.page,
			};
    case SET_IS_USER_AUTHENTICATED:
      return {
        ...state,
        isUserAuthenticated: action.value,
      };
		default:
			return state;
	}
}

export default appBodyReducer;
