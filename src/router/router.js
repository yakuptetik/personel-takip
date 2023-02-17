import { useUserStore } from '../store/user';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import API from '../utils/API'


const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const userStore = useUserStore();
	const token = localStorage.getItem('token') || sessionStorage.getItem('token');
	const isAuthenticated = userStore.isAuth;

	if(to.name !== 'Login' && !token && !isAuthenticated) {
		next({ name: 'Login', query: { redirect: to.name }});

		return;
	}

	if(to.name === 'Login' && !token && !isAuthenticated) {
		next();

		return;
	}

	if(token && !isAuthenticated && to.name === 'Login') {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		userStore.isAuth = true;

		next({ name: 'Home' });
		return;
	}

	if(token && !isAuthenticated) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		userStore.isAuth = true;

		next();
		return;
	}

	if(isAuthenticated && to.name === 'Login') {
		next({ name: to.name });
		return;
	}

	next();
});


export default router;

