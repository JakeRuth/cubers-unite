import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {checkUserLoginStatus} from '../actions/LoginActions';

import SignUpPage from './pre-auth/SignUpPage';
import ConfirmSignUpPage from './pre-auth/ConfirmSignUpPage';
import LoginPage from './pre-auth/LoginPage';
import HomePage from './auth/HomePage';

import {UN_AUTH_PAGE} from '../constants/UnAuthPage';

import './AppBody.css';

class AppBodyComponent extends React.Component {
	componentDidMount() {
		// 'remember me' feature, goes to homepage if user is already logged in
		this.props.checkUserLoginStatus();
	}

  render() {
    let content;
    if (!this.props.userIdToken) {
      switch(this.props.currentUnAuthPage) {
        case UN_AUTH_PAGE.SIGN_UP:
          content = <SignUpPage/>;
          break;
        case UN_AUTH_PAGE.CONFIRM_SIGN_UP:
          content = <ConfirmSignUpPage/>;
          break;
        case UN_AUTH_PAGE.LOGIN:
          content = <LoginPage/>;
          break;
        default:
          content = 'Error'; // TODO: Do something better than this
      }
    } else {
      content = <HomePage/>;
    }

    return (
      <div className="app-body-container">
        {content}
      </div>
    );
  }
}

AppBodyComponent.propTypes = {
  currentUnAuthPage: PropTypes.oneOf(Object.values(UN_AUTH_PAGE)).isRequired,
  userIdToken: PropTypes.string,
  checkUserLoginStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.appBody,
    userIdToken: state.login.userIdToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserLoginStatus: () => dispatch(checkUserLoginStatus()),
  };
};

const AppBody = connect(mapStateToProps, mapDispatchToProps)(AppBodyComponent);
export default AppBody;
