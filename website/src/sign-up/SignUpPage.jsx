import React from 'react';

import './SignUpPage.css';

export default class SignUpPage extends React.Component {
  render() {
    return (
      <form className="sign-up-page-container pure-form pure-form-aligned">
          <div className="pure-control-group">
              <input id="name" type="text" placeholder="Username"/>
          </div>

          <div className="pure-control-group">
              <input id="password" type="password" placeholder="Password"/>
          </div>

          <div className="pure-control-group">
              <input id="email" type="email" placeholder="Email Address"/>
          </div>

          <button type="submit" className="pure-button pure-button-primary">Submit</button>
      </form>
    );
  }
}
