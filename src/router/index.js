
import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/pages/index'

Vue.use(VueRouter)

export default  new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		}
		
	]
})