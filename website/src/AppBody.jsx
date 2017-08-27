import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignUpPage from './sign-up/SignUpPage';
import ConfirmSignUpPage from './sign-up/ConfirmSignUpPage';

import {ASYNC_STATUS} from './constants/AsyncStatus';

import './AppBody.css';

class AppBodyComponent extends React.Component {
  render() {
    let content;
    if (this.props.signUpRequestStatus !== ASYNC_STATUS.SUCCESS) {
      content = <SignUpPage/>;
    } else if (this.props.confirmSignUpRequestStatus !== ASYNC_STATUS.SUCCESS) {
      content = <ConfirmSignUpPage/>;
    } else {
      content = 'Time to make the login form :)';
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
  confirmSignUpRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    signUpRequestStatus: state.signUp.signUpRequestStatus,
    confirmSignUpRequestStatus: state.confirmSignUp.confirmSignUpRequestStatus,
  };
};

const AppBody = connect(mapStateToProps)(AppBodyComponent);
export default AppBody;
