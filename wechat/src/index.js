import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/initial.css';
import Login from './components/login';
import Home from './components/home.js';
import HeaderWX from './components/header.js';
import Personage from './components/personage.js';
import registerServiceWorker from './registerServiceWorker';

//路由
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';



ReactDOM.render(
	<Router>
		<Home>
			<Route path='login' component={Login} />
			<Route path='personage' component={Personage}/>
		</Home>		
	</Router>, document.getElementById('root'));
registerServiceWorker();