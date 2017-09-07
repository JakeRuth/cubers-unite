import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';

import {
  updateUsername,
  updatePassword,
  authenticate,
} from '../../actions/LoginActions';
import {updateUnAuthPage} from '../../actions/AppBodyActions';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';
import {UN_AUTH_PAGE} from '../../constants/UnAuthPage';

import './Login.css';

class LoginPageComponent extends React.Component {
  onAuthenticateSubmit = () => {
    this.props.authenticate(this.props.username, this.props.password);
  };

  goToSignUpPage = () => {
    this.props.updateUnAuthPage(UN_AUTH_PAGE.SIGN_UP);
  };

  renderSpinner() {
    return (
      <div className="login-page-spinner-container">
        <Spinner/>
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        <p className="login-form-label">Login ^_^</p>
        <form className="login-page-container pure-form pure-form-aligned">
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
              onClick={this.onAuthenticateSubmit}
              className="pure-button pure-button-primary"
              type="button"
            >
              Submit
            </button>
        </form>
        <p className="login-page-go-to-sign-up-message">
          Don't have an account?
          <span
            className="login-page-sign-up-page-link"
            onClick={this.goToSignUpPage}
          >
            {' Click here.'}
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.loginRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
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

LoginPageComponent.propTypes = {
  username: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  authenticate: PropTypes.func.isRequired,
  loginRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateUsername: (event) => dispatch(updateUsername(event)),
      updatePassword: (event) => dispatch(updatePassword(event)),
      authenticate: (username, password) => dispatch(authenticate(username, password)),
      updateUnAuthPage: (page) => dispatch(updateUnAuthPage(page)),
  };
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
export default LoginPage;
