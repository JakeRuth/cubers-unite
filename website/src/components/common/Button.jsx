import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button
      	className="pure-button pure-button-primary button-xlarge"
      	onClick={this.props.onClick}
    	>
        {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
