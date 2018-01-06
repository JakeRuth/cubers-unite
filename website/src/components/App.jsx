import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import AppReducer from '../reducers/AppReducer';

import Header from './Header';
import SignUpPage from './pre-auth/SignUpPage';
import ConfirmSignUpPage from './pre-auth/ConfirmSignUpPage';
import LoginPage from './pre-auth/LoginPage';
import HomePage from './auth/HomePage';
import RoomPage from './auth/room/RoomPage';

import './App.css';

export default class App extends React.Component {
	render() {
		const store = createStore(AppReducer, applyMiddleware(thunk));

		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Header />
		        <hr/>

						<Route exact path="/" component={HomePage} />
						<Route path="/home" component={HomePage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/sign-up" component={SignUpPage} />
						<Route path="/confirm-sign-up" component={ConfirmSignUpPage} />
						<Route path="/room" component={RoomPage} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}
