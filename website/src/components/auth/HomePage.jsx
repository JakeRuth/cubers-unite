import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CreateRoomModal from './CreateRoomModal';
import Button from '../common/Button';

import {
  toggleCreateRoomModal,
  updateName,
  createRoom,
} from '../../actions/HomePageActions';

import {ButtonSize} from '../../constants/ButtonSize';
import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './HomePage.css';

class HomePageComponent extends React.Component {
  render() {
    return (
      <div className='home-page-container'>
        <Button
        	label='Create Room'
        	onClick={this.props.toggleCreateRoomModal}
          size={ButtonSize.XLARGE}
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
    );
  }
}

HomePageComponent.propTypes = {
  name: PropTypes.string.isRequired,
  createRoom: PropTypes.func.isRequired,
	showCreateRoomModal: PropTypes.bool.isRequired,
	toggleCreateRoomModal: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  createRoomRequestStatus:  PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.homePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      createRoom: (name) => dispatch(createRoom(name)),
      toggleCreateRoomModal: () => dispatch(toggleCreateRoomModal()),
      updateName: (event) => dispatch(updateName(event)),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePage;
