import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SignUpPage from './sign-up/SignUpPage';
import ConfirmSignUpPage from './sign-up/ConfirmSignUpPage';

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
          content = 'Time to make the login form :)';
          break;
        default:
          content = 'Error'; // TODO: Do something better than this
      }
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
  isUserAuthenitcated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.appBody,
  };
};

const AppBody = connect(mapStateToProps)(AppBodyComponent);
export default AppBody;
