import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';

import {updateEmail, updateUsername, updatePassword, signUp} from '../actions/SignUpActions.js';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

import './SignUpPage.css';

class SignUpPageComponent extends React.Component {
  signUp = () => {
    this.props.signUp(this.props.username, this.props.email, this.props.password);
  };

  renderSpinner() {
    return (
      <div className="spinner-container">
        <Spinner/>
      </div>
    );
  }

  renderForm() {
    return (
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
            onClick={this.signUp}
            className="pure-button pure-button-primary"
            type="button"
          >
            Submit
          </button>
      </form>
    );
  }

  render() {
    let content;

    switch(this.props.signUpRequestStatus) {
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
  };
};

const SignUpPage = connect(mapStateToProps, mapDispatchToProps)(SignUpPageComponent);
export default SignUpPage;
