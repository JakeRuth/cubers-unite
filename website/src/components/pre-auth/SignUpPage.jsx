import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Spinner from '../common/Spinner';
import Form from '../common/Form';

import {
  updateEmail,
  updateUsername,
  updatePassword,
  signUp,
} from '../../actions/SignUpActions';

import {ASYNC_STATUS} from '../../constants/AsyncStatus';

import './SignUpPage.css';

class SignUpPageComponent extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    // On successful sign up, go to the confirm sign up page
    if (this.props.signUpRequestStatus === ASYNC_STATUS.IN_FLIGHT &&
        nextProps.signUpRequestStatus === ASYNC_STATUS.SUCCESS) {
      this.props.history.push('/confirm-sign-up');
    }
  }

  onSignUpSubmit = () => {
    this.props.signUp(this.props.username, this.props.email, this.props.password);
  };

  renderContent() {
    return (
      <div>
        <Form
          label="Sign up to start cubing"
          onSubmit={this.onSignUpSubmit}
          fields={[
            {
              id: "email",
              placeholder: "Email Address",
              value: this.props.email,
              onChange: this.props.updateEmail,
            },
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
        <p className="sign-up-page-skip-message">
          Already have a verification code?
          <span className="sign-up-page-skip-link">
            <Link to="/confirm-sign-up">{' Click here.'}</Link>
          </span>
        </p>
        <p className="sign-up-page-skip-message">
          Already have an account?
          <span className="sign-up-page-skip-link">
            <Link to="/login">{' Click here.'}</Link>
          </span>
        </p>
      </div>
    );
  }

  render() {
    let content;

    if (this.props.signUpRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
      content = <Spinner />;
    } else {
      content = this.renderContent();
    }

    return (
      <div className="sign-up-page-container">
        {content}
      </div>
    );
  }
}

SignUpPageComponent.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateUsername: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
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
