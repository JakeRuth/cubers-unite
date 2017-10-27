import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Button from '../common/Button';
import Modal from '../common/Modal';
import Form from '../common/Form';

import {
  toggleCreateRoomModal,
  updateName,
  createRoom,
} from '../../actions/HomePageActions';

import {ButtonSize} from '../../constants/ButtonSize';

import './HomePage.css';

class HomePageComponent extends React.Component {
  submitCreateRoomForm = (event) => {
    event.preventDefault();
    this.props.createRoom(this.props.name);
  };

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
              onSubmit={this.submitCreateRoomForm}
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
            <p>You can help create this website! Check out the code and contribute/learn{' '}
              <a
                href="https://github.com/JakeRuth/cubers-unite"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>.
            </p>
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
