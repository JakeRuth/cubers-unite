import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from '../common/Button';
import Modal from '../common/Modal';

import {toggleCreateRoomModal} from '../../actions/HomePageActions';

import {ButtonSize} from '../../constants/ButtonSize';

import './HomePage.css';

class HomePageComponent extends React.Component {
  render() {
    return (
      <div className='home-page-container'>
      	<Modal
      		show={this.props.showCreateRoomModal}
      		onClose={this.props.toggleCreateRoomModal}
      	>
      		<div>hey</div>
      	</Modal>
        <Button
        	label='Create Room'
        	onClick={this.props.toggleCreateRoomModal}
          size={ButtonSize.XLARGE}
      	/>
      </div>
    );
  }
}

HomePageComponent.propTypes = {
	showCreateRoomModal: PropTypes.bool.isRequired,
	toggleCreateRoomModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.homePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      toggleCreateRoomModal: () => dispatch(toggleCreateRoomModal()),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePage;
