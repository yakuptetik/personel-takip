import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/data',
		name: 'Data',
		component: () => import('../views/DataPage.vue'),
	},
  {
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
	}

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
