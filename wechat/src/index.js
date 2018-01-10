import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/initial.css';
import Login from './components/login';
import Home from './components/home.js';
import HeaderWX from './components/header.js';
import Personage from './components/personage.js';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Personage />, document.getElementById('root'));
registerServiceWorker();