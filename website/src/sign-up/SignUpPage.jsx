import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';

import {
  updateEmail,
  updateUsername,
  updatePassword,
  signUp,
} from '../actions/SignUpActions';
import {updateUnAuthPage} from '../actions/AppBodyActions';

import {ASYNC_STATUS} from '../constants/AsyncStatus';
import {UN_AUTH_PAGE} from '../constants/UnAuthPage';

import './SignUpPage.css';

class SignUpPageComponent extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    // On successful sign up, go to the confirm sign up page
    if (this.props.signUpRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.signUpRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.updateUnAuthPage(UN_AUTH_PAGE.CONFIRM_SIGN_UP);
    }
  }

  onSignUpSubmit = () => {
    this.props.signUp(this.props.username, this.props.email, this.props.password);
  };

  skipToConfirmationForm = () => {
    this.props.updateUnAuthPage(UN_AUTH_PAGE.CONFIRM_SIGN_UP);
  };

  renderSpinner() {
    return (
      <div className="sign-up-page-spinner-container">
        <Spinner/>
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        <p className="sign-up-form-label">Sign up to start cubing</p>
        <form className="sign-up-page-container pure-form pure-form-aligned">
            <div className="pure-control-group">
                <input
                  id="email"
                  placeholder="Email Address"
                  value={this.props.email}
                  onChange={this.props.updateEmail}
                />
            </div>
            <div className="pure-control-group">
                <input
                  id="name"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.props.updateUsername}
                />
            </div>
            <div className="pure-control-group">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.updatePassword}
                />
            </div>
            <button
              onClick={this.onSignUpSubmit}
              className="pure-button pure-button-primary"
              type="button"
            >
              Submit
            </button>
        </form>
        <p className="sign-up-page-skip-message">
          Already have a verification code?
          <span
            className="sign-up-page-token-form-link"
            onClick={this.skipToConfirmationForm}
          >
            {' Click here.'}
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.signUpRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = this.renderSpinner();
    } else {
      content = this.renderContent();
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

SignUpPageComponent.propTypes = {
  username: PropTypes.string.isRequired,
  updateEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  signUpRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.signUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateEmail: (event) => dispatch(updateEmail(event)),
      updateUsername: (event) => dispatch(updateUsername(event)),
      updatePassword: (event) => dispatch(updatePassword(event)),
      signUp: (username, email, password) => dispatch(signUp(username, email, password)),
      updateUnAuthPage: (page) => dispatch(updateUnAuthPage(page)),
  };
};

const SignUpPage = connect(mapStateToProps, mapDispatchToProps)(SignUpPageComponent);
export default SignUpPage;
