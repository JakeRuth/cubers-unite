import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export default class Form extends React.Component {
  renderFields = () => {
    let fieldElements = [];
    this.props.fields.forEach((field) => {
      fieldElements.push(
        <div key={field.id} className="pure-control-group">
          <input {...field}/>
        </div>
      );
    });
    return fieldElements;
  };

  render() {
    return (
      <div>
        {this.props.label && (
          <p className="form-label">
            {this.props.label}
          </p>
        )}
        <form className="form-container pure-form pure-form-aligned">
          {this.renderFields()}
          <button
            onClick={this.props.onSubmit}
            className="pure-button pure-button-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequried,
      type: PropTypes.string,
      placeholder: PropTypes.string.isRequired,
      value: PropTypes.string,
      onChange: PropTypes.func.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};
