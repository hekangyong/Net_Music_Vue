import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import dailysonglist from './views/DailySongList.vue'
import songlistdetail from './views/SongListDetail.vue'
import homepage from './views/HomePage.vue'
import test from './views/test.vue'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/login',
			name: 'login',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
		},
		{
			path: '/songlistdetail',
			name: 'songlistdetail',
			// route level code-splitting
			// this generates a separate chunk (songlistdetail.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "songlistdetail" */ './views/SongListDetail.vue'),
		},
		{
			path: '/dailysonglist',
			name: 'dailysonglist',
			component: dailysonglist,
			children:[
				{
					path: 'listdetail:id',
					name: 'dail_songlistdetail',
					component: songlistdetail
				}
			]
		},
		{
			path: '/myhomepage',
			name: 'homepage',
			component: homepage
		}
	],

})

router.beforeEach((to, from, next) => {
	let loginStatus = localStorage.getItem('Status');
	if (loginStatus == 'true') {
		next(vm => {
			vm.$store.commit('loginStatusInfo', true);
		});
	} else {
		next();
	}
})

export default router
