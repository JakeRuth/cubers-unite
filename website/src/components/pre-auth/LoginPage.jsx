import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Spinner from '../common/Spinner';
import Form from '../common/Form';

import {
  updateUsername,
  updatePassword,
  authenticate,
} from '../../actions/LoginActions';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './LoginPage.css';

class LoginPageComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.loginRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.loginRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.history.push('/home');
    }
  }

  onAuthenticateSubmit = () => {
    this.props.authenticate(this.props.username, this.props.password);
  };

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
          <span className="login-page-sign-up-page-link">
            <Link to="/sign-up">{' Click here.'}</Link>
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.loginRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = <Spinner />;
    } else {
      content = this.renderContent();
    }

    return (
      <div className="login-page-container">
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
  };
};

const LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
export default LoginPage;
