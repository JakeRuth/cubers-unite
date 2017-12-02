import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Spinner from '../common/Spinner';
import Form from '../common/Form';

import {updateUsername, updateVerificationCode, confirmSignUp} from '../../actions/ConfirmSignUpActions.js';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './ConfirmSignUpPage.css';

class ConfirmSignUpPageComponent extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    // On successful confirm sign up, go to the login page
    if (this.props.confirmSignUpRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.confirmSignUpRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.history.push('/login');
    }
  }

  onConfirmSignUpSubmit = () => {
    let username = this.props.username ? this.props.username : this.props.signUpUsername;
    this.props.confirmSignUp(this.props.verificationCode, username);
  };

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
          <span className="confirm-sign-up-page-token-form-link">
            <Link to="/sign-up">{' Click here.'}</Link>
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.confirmSignUpRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = <Spinner />;
    } else {
      content = this.renderForm();
    }

    return (
      <div className="confirm-sign-up-page-container">
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
  };
};

const ConfirmSignUpPage = connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUpPageComponent);
export default ConfirmSignUpPage;
