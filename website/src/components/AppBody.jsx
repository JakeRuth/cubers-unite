import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptRefreshUserSession} from '../actions/LoginActions';

import SignUpPage from './pre-auth/SignUpPage';
import ConfirmSignUpPage from './pre-auth/ConfirmSignUpPage';
import LoginPage from './pre-auth/LoginPage';
import HomePage from './auth/HomePage';
import Spinner from './common/Spinner';

import {UN_AUTH_PAGE} from '../constants/UnAuthPage';
import {ASYNC_STATUS} from '../constants/AsyncStatus';

import './AppBody.css';

class AppBodyComponent extends React.Component {
	componentDidMount() {
		this.props.attemptRefreshUserSession();
	}

	renderApp() {
		let content;
    if (!this.props.userIdToken) {
      switch(this.props.currentUnAuthPage) {
        case UN_AUTH_PAGE.SIGN_UP:
				return <SignUpPage/>;
          break;
        case UN_AUTH_PAGE.CONFIRM_SIGN_UP:
          return <ConfirmSignUpPage/>;
          break;
        case UN_AUTH_PAGE.LOGIN:
          return <LoginPage/>;
          break;
        default:
          return 'Error'; // TODO: Do something better than this
      }
    } else {
      return <HomePage/>;
    }
	}

  render() {
		let content;
		if (this.props.attemptRefreshUserSessionRequestStatus == ASYNC_STATUS.IN_FLIGHT) {
			content = <Spinner />;
		} else {
			content = this.renderApp();
		}

		return (
			<div className="app-body-container">
        {content}
      </div>
		)
  }
}

AppBodyComponent.propTypes = {
  currentUnAuthPage: PropTypes.oneOf(Object.values(UN_AUTH_PAGE)).isRequired,
  userIdToken: PropTypes.string,
  attemptRefreshUserSession: PropTypes.func.isRequired,
	attemptRefreshUserSessionRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
};

const mapStateToProps = (state) => {
  return {
    ...state.appBody,
    userIdToken: state.login.userIdToken,
    attemptRefreshUserSessionRequestStatus: state.login.attemptRefreshUserSessionRequestStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptRefreshUserSession: () => dispatch(attemptRefreshUserSession()),
  };
};

const AppBody = connect(mapStateToProps, mapDispatchToProps)(AppBodyComponent);
export default AppBody;
