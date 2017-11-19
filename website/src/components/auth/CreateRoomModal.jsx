import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';
import Form from '../common/Form';
import Spinner from '../common/Spinner';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './CreateRoomModal.css';

class CreateRoomModal extends React.Component {
  submitCreateRoomForm = (event) => {
    event.preventDefault();
    this.props.createRoom(this.props.name);
  };

  renderForm() {
    let message = '';

    if (this.props.createRoomRequestStatus === ASYNC_STATUS.FAILURE) {
      // TODO: Do something better than this
      message = <p>Something went wrong! Close modal and try again.</p>;
    } else if (this.props.createRoomRequestStatus === ASYNC_STATUS.SUCCESS) {
      message = <p>Room created!  You can close this modal.</p>;
    } else {
      message = (
        <div>
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
      );
    }

    return (
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
      {message}
      </div>
    );
  }

  renderSpinner() {
    return <Spinner />;
  }

  render() {
    let content;

    if (this.props.createRoomRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = this.renderSpinner();
    } else {
      content = this.renderForm();
    }

    return (
    	<Modal
    		show={this.props.showCreateRoomModal}
    		onClose={this.props.toggleCreateRoomModal}
    	>
        <div className="create-room-modal-content">
          {content}
        </div>
    	</Modal>
    );
  }
}

CreateRoomModal.propTypes = {
  name: PropTypes.string.isRequired,
  createRoom: PropTypes.func.isRequired,
	showCreateRoomModal: PropTypes.bool.isRequired,
	toggleCreateRoomModal: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
  createRoomRequestStatus:  PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

export default CreateRoomModal;
