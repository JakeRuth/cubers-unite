import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../common/Spinner';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './RoomList.css';

class RoomList extends React.Component {
	renderList() {
		if (!this.props.rooms.length) {
			return 'No active rooms, you should create one!';
		}

		return (
			<div className='room-list-row-container'>
				<div className='room-list-row-header room-list-row'>
					<div className='room-list-cell'>Name</div>
					<div className='room-list-cell'>Creator</div>
					<div className='room-list-cell'>Created At</div>
					<div className='room-list-cell'>Puzzle Type</div>
				</div>
				{
					this.props.rooms.map((room) => {
						// TODO: This string manipulation should be handled in backend endpoint
						const lastDot = room.createdAt.lastIndexOf('.');
						return (
							<div className='room-list-row' key={room.id}>
								<div className='room-list-cell'>{room.name}</div>
								<div className='room-list-cell'>{room.createdBy}</div>
								<div className='room-list-cell'>{room.createdAt.substr(0, lastDot)}</div>
								<div className='room-list-cell'>{room.puzzleType}</div>
							</div>
						);
					})
				}
			</div>
		);
	}

	render() {
		let content;
		if (this.props.fetchRoomsRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = <Spinner />;
    } else {
      content = this.renderList();
    }

		return (
			<div className="room-list-container">{content}</div>
		);
	}
}

RoomList.propTypes = {
	rooms: PropTypes.array.isRequired,
  fetchRoomsRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

export default RoomList;
