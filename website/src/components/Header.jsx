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

  renderForkMeGithub() {
    return (
      <div className="app-header-github-container">
        <a href="https://github.com/JakeRuth/cubers-unite" target="_blank" rel="noopener noreferrer">
          <div className="app-header-github-link-content">
            <img
              className="app-header-github-octocat"
              height="70"
              width="80"
              src="https://s3.amazonaws.com/cubers-unite-website/Octocat.png"
              alt="GitHub"
            />
            <span>Help Build This!</span>
          </div>
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="app-header-container pure-u-1">
        {this.props.userIdToken && this.renderLogoutButton()}
        {this.renderForkMeGithub()}
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
