import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';
import Form from '../common/Form';

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
    let username = this.props.username ? this.props.username : this.props.signUpUsername;
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
    let formMessage;
    let fields = [
      {
        id: "verificationCode",
        placeholder: "Verification Code #",
        value: this.props.verificationCode,
        onChange: this.props.updateVerificationCode,
      },
    ];

    // username and email aren't required since it's possible to skip the sign up page
    if (this.props.signUpEmail && this.props.signUpUsername) {
      formMessage = `An email with a verification code has been sent to ${this.props.signUpEmail} for ${this.props.signUpUsername}.`;
    } else {
      formMessage = 'Please enter the username you sign up with, as well as the verification code sent to your email.';
      fields.unshift({
        id: "username",
        placeholder: "Username",
        value: this.props.username,
        onChange: this.props.updateUsername,
      });
    }

    return (
      <div>
        <Form
          label={formMessage}
          onSubmit={this.onConfirmSignUpSubmit}
          fields={fields}
        />
        <p className="confirm-sign-up-page-skip-message">
          No verification code?
          <span
            className="confirm-sign-up-page-token-form-link"
            onClick={this.goToSignUpForm}
          >
            {' Click here.'}
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.confirmSignUpRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = this.renderSpinner();
    } else {
      content = this.renderForm();
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

ConfirmSignUpPageComponent.propTypes = {
  signUpUsername: PropTypes.string,
  signUpEmail: PropTypes.string,
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
    signUpUsername: state.signUp.username,
    signUpEmail: state.signUp.email,
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
