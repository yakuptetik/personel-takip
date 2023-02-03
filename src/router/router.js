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
const token = localStorage.getItem('token');

	if(token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		userStore.isAuth = true;
	}

	next();
});


export default router;

