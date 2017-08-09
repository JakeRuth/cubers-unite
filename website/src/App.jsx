import React from 'react';

import AppHeader from'./AppHeader';
import SignUpPage from './SignUp/SignUpPage.jsx';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <AppHeader/>
        <SignUpPage/>
      </div>
    );
  }
}
