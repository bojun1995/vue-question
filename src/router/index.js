import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '*',
		redirect: '/',
	},
	{
		path: '/chapter-2/code-0/index',
		name: 'Object.defineProperty',
		component: () => import('@/views/chapter-2/code-0/index.vue'),
	},
	{
		path: '/prototype/code-0/index',
		name: 'Object.prototype',
		component: () => import('@/views/prototype/code-0/index.vue'),
	},
	{
		path: '/test-v-dlc',
		name: 'test-v-dlc',
		component: () => import('@/views/test-v-dlc/index.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
