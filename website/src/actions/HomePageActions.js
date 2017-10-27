import {requestWrapper} from '../request';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

export const TOGGLE_CREATE_ROOM_MODAL = 'homePage/TOGGLE_CREATE_ROOM_MODAL';
export const UPDATE_NAME = 'homePage/UPDATE_NAME';
export const CREATE_ROOM_REQUEST_UPDATE = 'homePage/CREATE_ROOM_REQUEST_UPDATE';

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
      },
			(err, res) => {
				// TODO: dipatch results
			}
    );
  };
}
