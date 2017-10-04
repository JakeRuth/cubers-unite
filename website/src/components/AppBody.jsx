import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignUpPage from './pre-auth/SignUpPage';
import ConfirmSignUpPage from './pre-auth/ConfirmSignUpPage';
import LoginPage from './pre-auth/LoginPage';
import HomePage from './auth/HomePage';

import {UN_AUTH_PAGE} from '../constants/UnAuthPage';

import './AppBody.css';

class AppBodyComponent extends React.Component {
  render() {
    let content;
    if (!this.props.isUserAuthenticated) {
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
    content = <HomePage/>;

    return (
      <div className="app-body-container">
        {content}
      </div>
    );
  }
}

AppBodyComponent.propTypes = {
  currentUnAuthPage: PropTypes.oneOf(Object.values(UN_AUTH_PAGE)).isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.appBody,
  };
};

const AppBody = connect(mapStateToProps)(AppBodyComponent);
export default AppBody;
