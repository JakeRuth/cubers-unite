import React from 'react';

import './AppHeader.css';

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header-container pure-u-1">
        <h1 className="title">Cubers Unite</h1>
        <hr/>
      </div>
    );
  }
}
