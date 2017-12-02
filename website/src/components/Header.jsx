import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {localStorageGet} from '../localStorageWrapper';

import {
  logout,
} from '../actions/LoginActions';

import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

import './Header.css';

class HeaderComponent extends React.Component {
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
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  userIdToken: PropTypes.string,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userIdToken: localStorageGet(LOCAL_STORAGE_KEYS.USER_ID),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
export default Header;
