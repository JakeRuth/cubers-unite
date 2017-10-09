import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../common/Spinner';
import Form from '../common/Form';

import {
  updateUsername,
  updatePassword,
  authenticate,
} from '../../actions/LoginActions';
import {
  updateUnAuthPage,
  setIsUserAuthenticated,
} from '../../actions/AppBodyActions';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';
import {UN_AUTH_PAGE} from '../../constants/UnAuthPage';

import './LoginPage.css';

class LoginPageComponent extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    // On successful sign up, go to the confirm sign up page
    if (this.props.loginRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.loginRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.setIsUserAuthenticated(true);
    }
  }

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
        <Form
          label="Login ^_^"
          onSubmit={this.onAuthenticateSubmit}
          fields={[
            {
              id: "username",
              placeholder: "Username",
              value: this.props.username,
              onChange: this.props.updateUsername,
            },
            {
              id: "password",
              type: "password",
              placeholder: "Password",
              value: this.props.password,
              onChange: this.props.updatePassword,
            },
          ]}
        />
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
  setIsUserAuthenticated: PropTypes.func.isRequired,
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
      setIsUserAuthenticated: (value) => dispatch(setIsUserAuthenticated(value)),
  };
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
export default LoginPage;
