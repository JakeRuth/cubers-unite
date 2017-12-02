import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {attemptRefreshUserSession} from '../actions/LoginActions';

import Spinner from './common/Spinner';

import {ASYNC_STATUS} from '../constants/AsyncStatus';

import './Page.css';

class PageComponent extends React.Component {
	componentDidMount() {
		this.props.attemptRefreshUserSession();
	}

  componentWillReceiveProps(nextProps) {
    if (this.props.attemptRefreshUserSessionRequestStatus !== ASYNC_STATUS.FAILURE &&
			nextProps.attemptRefreshUserSessionRequestStatus === ASYNC_STATUS.FAILURE) {
      this.props.push('/login');
    }
  }

  render() {
		let content;
		if (this.props.attemptRefreshUserSessionRequestStatus === ASYNC_STATUS.IN_FLIGHT) {
			content = <Spinner />;
		} else {
			content = this.props.children;
		}

		return (
			<div className="page-container">
        {content}
      </div>
		)
  }
}

PageComponent.propTypes = {
  attemptRefreshUserSession: PropTypes.func.isRequired,
	attemptRefreshUserSessionRequestStatus: PropTypes.oneOf(Object.values(ASYNC_STATUS)).isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    attemptRefreshUserSessionRequestStatus: state.login.attemptRefreshUserSessionRequestStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptRefreshUserSession: () => dispatch(attemptRefreshUserSession()),
  };
};

const Page = connect(mapStateToProps, mapDispatchToProps)(PageComponent);
export default Page;
