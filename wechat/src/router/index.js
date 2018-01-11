import Home from '../component/home.js';
import Login from '../component/login.js';
import Personage from '../component/personage.js';


const router_config = [{
	path: '/',
	component: Home
}, {
	path: '/login',
	component: Login
}, {
	path: '/personage',
	component: Personage
}]

export default router_config;