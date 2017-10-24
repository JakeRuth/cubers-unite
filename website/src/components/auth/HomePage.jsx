import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from '../common/Button';
import Modal from '../common/Modal';
import Form from '../common/Form';

import {toggleCreateRoomModal} from '../../actions/HomePageActions';
import {
  updateName,
} from '../../actions/CreateRoomFormActions';

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
        <div>
          <Form
            label="Create Room"
            onSubmit={() => {}}
            fields={[
              {
                id: "name",
                placeholder: "Name",
                value: this.props.name,
                onChange: this.props.updateName,
              },
            ]}
          />
        <p>Only supporting 3x3 room types currently, Cubers Unite is still in beta and not production ready.</p>
        <p>You can join the cause! Check out the code and contribute/learn{' '}
          <a href="https://github.com/JakeRuth/cubers-unite" target="_blank">click here</a>.</p>
        </div>
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
  name: PropTypes.string.isRequired,
	showCreateRoomModal: PropTypes.bool.isRequired,
	toggleCreateRoomModal: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    name: state.createRoomForm.name,
    ...state.homePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      toggleCreateRoomModal: () => dispatch(toggleCreateRoomModal()),
      updateName: (event) => dispatch(updateName(event)),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);
export default HomePage;
