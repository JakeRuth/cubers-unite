import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AppReducer from './reducers/AppReducer';

import AppHeader from'./AppHeader';
import SignUpPage from './sign-up/SignUpPage.jsx';

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(AppReducer)}>
				<div className="pure-g">
					<AppHeader/>
					<SignUpPage/>
				</div>
			</Provider>
		);
	}
}
