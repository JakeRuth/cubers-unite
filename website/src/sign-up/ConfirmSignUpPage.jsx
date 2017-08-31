import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';

import {updateVerificationCode, confirmSignUp} from '../actions/ConfirmSignUpActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

import './ConfirmSignUpPage.css';

class ConfirmSignUpPageComponent extends React.Component {
  onConfirmSignUpSubmit = () => {
    this.props.confirmSignUp(this.props.verificationCode, this.props.username);
  };

  goToSignUpForm = () => {
    
  };

  renderSpinner() {
    return (
      <div className="confirm-sign-up-page-spinner-container">
        <Spinner/>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <div className="confirm-sign-up-form-label">
          {`An email with a verification code has been sent to ${this.props.email} for ${this.props.username}.`}
        </div>
        <form className="confirm-sign-up-form pure-form pure-form-aligned">
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
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  verificationCode: PropTypes.string.isRequired,
  updateVerificationCode: PropTypes.func.isRequired,
  confirmSignUp: PropTypes.func.isRequired,
  confirmSignUpRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.confirmSignUp,
    username: state.signUp.username,
    email: state.signUp.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateVerificationCode: (event) => dispatch(updateVerificationCode(event)),
    confirmSignUp: (verificationCode, username) => dispatch(confirmSignUp(verificationCode, username)),
  };
};

const ConfirmSignUpPage = connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUpPageComponent);
export default ConfirmSignUpPage;