export default [
  {
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
  {
		path: '/login',
		name: 'Login',
		component: () => import('../views/LoginPage.vue'),
		meta: {
			isAuthenticated: false,
		}
	},
	{
		path: '/data',
		name: 'Data',
		component: () => import('../views/DataPage.vue'),
		meta: {
			isAuthenticated: false,
		}
	}
];
