import React from 'react';

import './Modal.css';

export default class Modal extends React.Component {
  constructor(props) {
    super();

    let opacity = 0;
    let visibility = 'hidden';
    if (props.show) {
      opacity = 1;
      visibility = 'visible';
    }

    this.state = {
      opacity,
      visibility,
      show: props.show,
    };
  }

  hideOnOuterClick = (event) => {
    if (event.target.dataset.modal && this.props.onClose) {
      this.props.onClose(event);
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.show === nextProps.show) {
      return;
    }
    nextProps.show === true ? this.fadeIn() : this.fadeOut();
  }

  fadeIn = () => {
    this.setState({
      visibility: 'visible',
      show: true,
    }, () => {
      // If this setState call isn't nested in a setTimeout, the animation breaks. +1 if you can figure out why, I'm too lazy
      setTimeout(() => {
        this.setState({opacity: 1});
      }, 1);
    });
  }

  fadeOut = () => {
    this.setState({
      opacity: 0,
    }, () => {
      this.setState({show: false});
    });
  }

  render() {
    if (!this.state.show) {
      return null;
    }

    return (
      <div
        className="modal-container"
        onClick={this.hideOnOuterClick}
        data-modal="true"
        style={this.state}
      >
        <div className="modal-content">
          <p
            className="modal-close-trigger"
            onClick={this.props.onClose}
          >
            x
          </p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
