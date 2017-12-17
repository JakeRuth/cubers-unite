import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from'../Page';
import CreateRoomModal from './CreateRoomModal';
import RoomList from './RoomList';
import Button from '../common/Button';

import {
  toggleCreateRoomModal,
  updateName,
  createRoom,
  fetchRooms,
} from '../../actions/HomePageActions';

import {ButtonSize} from '../../constants/ButtonSize';
import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './HomePage.css';

class HomePageComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    const {
      attemptRefreshUserSessionRequestStatus,
      fetchRoomsRequestStatus,
    } = nextProps;

    if (fetchRoomsRequestStatus === ASYNC_STATUS.READY && (
        attemptRefreshUserSessionRequestStatus !== ASYNC_STATUS.READY ||
        attemptRefreshUserSessionRequestStatus !== ASYNC_STATUS.IN_FLIGHT
    )) {
      this.props.fetchRooms();
    }
  }

  render() {
    return (
      <Page push={this.props.history.push}>
        <div className='home-page-container'>
          <Button
            className='home-page-create-room-button'
          	label='Create Room'
          	onClick={this.props.toggleCreateRoomModal}
            size={ButtonSize.XLARGE}
        	/>
          <RoomList
            fetchRoomsRequestStatus={this.props.fetchRoomsRequestStatus}
            rooms={this.props.rooms}
          />

          {/* Modals */}
        	<CreateRoomModal
            createRoom={this.props.createRoom}
        		showCreateRoomModal={this.props.showCreateRoomModal}
        		toggleCreateRoomModal={this.props.toggleCreateRoomModal}
            name={this.props.name}
            updateName={this.props.updateName}
            createRoomRequestStatus={this.props.createRoomRequestStatus}
        	/>
        </div>
      </Page>
    );
  }
}

HomePageComponent.propTypes = {
  name: PropTypes.string.isRequired,
  createRoom: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  fetchRooms: PropTypes.func.isRequired,
	showCreateRoomModal: PropTypes.bool.isRequired,
	toggleCreateRoomModal: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  createRoomRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
  fetchRoomsRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
  attemptRefreshUserSessionRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.homePage,
    attemptRefreshUserSessionRequestStatus: state.login.attemptRefreshUserSessionRequestStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      createRoom: (name) => dispatch(createRoom(name)),
      fetchRooms: () => dispatch(fetchRooms()),
      toggleCreateRoomModal: () => dispatch(toggleCreateRoomModal()),
      updateName: (event) => dispatch(updateName(event)),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePage;
