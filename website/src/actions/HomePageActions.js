import {requestWrapper} from '../request';
import {localStorageGet} from '../localStorageWrapper';

import {ASYNC_STATUS} from '../constants/AsyncStatus';
import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

export const TOGGLE_CREATE_ROOM_MODAL = 'homePage/TOGGLE_CREATE_ROOM_MODAL';
export const UPDATE_NAME = 'homePage/UPDATE_NAME';
export const CREATE_ROOM_REQUEST_UPDATE = 'homePage/CREATE_ROOM_REQUEST_UPDATE';
export const FETCH_ROOMS_REQUEST_UPDATE = 'homePage/FETCH_ROOMS_REQUEST_UPDATE';

export function toggleCreateRoomModal() {
	return {
		type: TOGGLE_CREATE_ROOM_MODAL,
	};
}

export function updateName(event) {
	return {
		type: UPDATE_NAME,
		text: event.target.value,
	};
}

export function createRoom(name) {
  return (dispatch) => {
    dispatch({
      type: CREATE_ROOM_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
    });

    requestWrapper.post(
      '/room/create',
      {
        name: name,
				username: localStorageGet(LOCAL_STORAGE_KEYS.USERNAME),
      },
			(err, res) => {
				dispatch({
		      type: CREATE_ROOM_REQUEST_UPDATE,
					status: err ? ASYNC_STATUS.FAILURE : ASYNC_STATUS.SUCCESS,
		    });
			}
    );
  };
}

export function fetchRooms() {
  return (dispatch) => {
    dispatch({
      type: FETCH_ROOMS_REQUEST_UPDATE,
			status: ASYNC_STATUS.IN_FLIGHT,
    });

    requestWrapper.get(
      '/room/fetch',
      {},
			(err, res) => {
				dispatch({
		      type: FETCH_ROOMS_REQUEST_UPDATE,
					status: err ? ASYNC_STATUS.FAILURE : ASYNC_STATUS.SUCCESS,
					response: res,
		    });
			}
    );
  };
}
