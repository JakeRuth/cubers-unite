import React from 'react';
import PropTypes from 'prop-types';

import {ButtonSize} from '../../constants/ButtonSize';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button
      	className={`pure-button pure-button-primary ${this.props.size}`}
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
  size: PropTypes.oneOf(Object.values(ButtonSize)).isRequired,
};
