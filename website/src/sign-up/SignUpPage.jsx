import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateEmail, updateUsername, updatePassword} from './Actions.js';

import './SignUpPage.css';

class SignUpPageComponent extends React.Component {
  render() {
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
                placeholder="Password"
                value={this.props.password}
                onChange={this.props.updatePassword}
              />
          </div>
          <button type="submit" className="pure-button pure-button-primary">Submit</button>
      </form>
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
};

const mapStateToProps = (state) => {
  return {
    ...state.signUp,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateEmail: (input) => dispatch(updateEmail(input)),
      updateUsername: (input) => dispatch(updateUsername(input)),
      updatePassword: (input) => dispatch(updatePassword(input)),
  };
}

const SignUpPage = connect(mapStateToProps, mapDispatchToProps)(SignUpPageComponent)

export default SignUpPage;
