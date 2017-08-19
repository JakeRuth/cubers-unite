import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignUpPage from './sign-up/SignUpPage.jsx';

import {ASYNC_STATUS} from './constants/AsyncStatus';

import './AppBody.css';

class AppBodyComponent extends React.Component {
  render() {
    let content;
    if (this.props.signUpRequest !== ASYNC_STATUS.SUCCESS) {
      content = <SignUpPage/>;
    } else {
      // for now default to this component since this is in mid-development and there are no other pages yet
      content = <SignUpPage/>;
    }

    return (
      <div className="app-body-container">
        {content}
      </div>
    );
  }
}

AppBodyComponent.propTypes = {
  signUpRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    signUpRequestStatus: state.signUp.signUpRequestStatus,
  };
};

const AppBody = connect(mapStateToProps)(AppBodyComponent);
export default AppBody;
