import React from 'react';

import Button from '../common/Button';

import './HomePage.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='home-page-container'>
        <Button label='Create Room'/>
      </div>
    );
  }
}
