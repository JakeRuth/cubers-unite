import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  logout,
} from '../actions/LoginActions';

import './AppHeader.css';

class AppHeaderComponent extends React.Component {
  renderLogoutButton() {
    return (
      <div
        className="app-header-logout"
        onClick={this.props.logout}
      >
        Logout
      </div>
    );
  }

  render() {
    return (
      <div className="app-header-container pure-u-1">
        {this.props.userIdToken && this.renderLogoutButton()}
        <h1 className="app-header-title">Cubers Unite</h1>
        <hr/>
      </div>
    );
  }
}

AppHeaderComponent.propTypes = {
  userIdToken: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userIdToken: state.login.userIdToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const AppHeader = connect(mapStateToProps, mapDispatchToProps)(AppHeaderComponent);
export default AppHeader;
