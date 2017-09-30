import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="pure-button pure-button-primary button-xlarge">
        {this.props.label}
      </button>
    );
  }
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
};
