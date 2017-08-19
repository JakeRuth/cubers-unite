import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import AppReducer from './reducers/AppReducer';

import AppHeader from'./AppHeader';
import AppBody from'./AppBody';

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(AppReducer, applyMiddleware(thunk))}>
				<div className="pure-g">
					<AppHeader/>
					<AppBody/>
				</div>
			</Provider>
		);
	}
}
