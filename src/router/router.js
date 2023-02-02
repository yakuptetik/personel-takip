import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import API from '../utils/API'

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const token = localStorage.getItem('token');

	if(token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`
	}

	next();
});


export default router;

