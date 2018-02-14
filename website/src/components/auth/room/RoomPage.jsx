import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Page from'../../common/Page';

// import './RoomPage.css';

class RoomPageComponent extends React.Component {
  componentWillMount() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Page push={this.props.history.push}>
        <div>{this.props.currentRoom ? JSON.stringify(this.props.currentRoom) : ''}</div>
      </Page>
    );
  }
}

RoomPageComponent.propTypes = {
  currentRoom: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO: This will have dispatched actions soon...
  };
};

const RoomPage = connect(mapStateToProps, mapDispatchToProps)(RoomPageComponent);
export default RoomPage;
