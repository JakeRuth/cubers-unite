import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';

import {updateUsername, updateVerificationCode, confirmSignUp} from '../../actions/ConfirmSignUpActions.js';
import {updateUnAuthPage} from '../../actions/AppBodyActions';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';
import {UN_AUTH_PAGE} from '../../constants/UnAuthPage';

import './ConfirmSignUpPage.css';

class ConfirmSignUpPageComponent extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    // On successful confirm sign up, go to the login page
    if (this.props.confirmSignUpRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.confirmSignUpRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.updateUnAuthPage(UN_AUTH_PAGE.LOGIN);
    }
  }

  onConfirmSignUpSubmit = () => {
    let username = this.props.username ? this.props.username : this.props.usernameFromSignUp;
    this.props.confirmSignUp(this.props.verificationCode, username);
  };

  goToSignUpForm = () => {
    this.props.updateUnAuthPage(UN_AUTH_PAGE.SIGN_UP);
  };

  renderSpinner() {
    return (
      <div className="confirm-sign-up-page-spinner-container">
        <Spinner/>
      </div>
    );
  }

  renderForm() {
    let formMessage, usernameInputComponent;

    // username and email aren't required since it's possible to skip the sign up page
    if (this.props.email && this.props.usernameFromSignUp) {
      formMessage = `An email with a verification code has been sent to ${this.props.email} for ${this.props.usernameFromSignUp}.`;
    } else {
      formMessage = 'Please enter the username you sign up with, as well as the verification code sent to your email.';
      usernameInputComponent = (
        <div className="pure-control-group">
          <input
            id="username"
            placeholder="Username"
            value={this.props.username}
            onChange={this.props.updateUsername}
          />
        </div>
      );
    }

    return (
      <div>
        <div className="confirm-sign-up-form-label">
          {formMessage}
        </div>
        <form className="confirm-sign-up-form pure-form pure-form-aligned">
          {usernameInputComponent}
          <div className="pure-control-group">
            <input
              id="verificationCode"
              placeholder="Verification Code #"
              value={this.props.verificationCode}
              onChange={this.props.updateVerificationCode}
            />
          </div>
          <button
            onClick={this.onConfirmSignUpSubmit}
            className="pure-button pure-button-primary"
            type="button"
          >
            Submit
          </button>
        </form>
        <p className="confirm-sign-up-page-skip-message">
          No verification code?
          <span
            className="confirm-sign-up-page-token-form-link"
            onClick={this.goToSignUpForm}
          >
            {' Click here '}
          </span>
          to sign up.
        </p>
      </div>
    );
  }

  render() {
    let content;

    switch(this.props.confirmSignUpRequestStatus) {
      case ASYNC_STATUS.IN_FLIGHT:
        content = this.renderSpinner();
        break;
      default:
        content = this.renderForm();
        break;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

ConfirmSignUpPageComponent.propTypes = {
  usernameFromSignUp: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
  updateUsername: PropTypes.func.isRequired,
  verificationCode: PropTypes.string,
  updateVerificationCode: PropTypes.func.isRequired,
  confirmSignUp: PropTypes.func.isRequired,
  confirmSignUpRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.confirmSignUp,
    usernameFromSignUp: state.signUp.username,
    email: state.signUp.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUsername: (event) => dispatch(updateUsername(event)),
    updateVerificationCode: (event) => dispatch(updateVerificationCode(event)),
    confirmSignUp: (verificationCode, username) => dispatch(confirmSignUp(verificationCode, username)),
    updateUnAuthPage: (page) => dispatch(updateUnAuthPage(page)),
  };
};

const ConfirmSignUpPage = connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUpPageComponent);
export default ConfirmSignUpPage;
