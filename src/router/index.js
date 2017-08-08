
import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/pages/index'
import DetialPage from '@/pages/detial'
import ForecastPage from '@/pages/detial/forecast'
import CountPage from '@/pages/detial/count'
import PublishPage from '@/pages/detial/publish'
import AnalysisPage from '@/pages/detial/analysis'

Vue.use(VueRouter)

export default  new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},{
			path: '/detial',
			component: DetialPage,
			redirect: '/detial/analysis',
			children: [
				{
					path: 'forecast',
					component: ForecastPage
				},
				{
					path: 'count',
					component: CountPage
				},
				{
					path: 'publish',
					component: PublishPage
				},
				{
					path: 'analysis',
					component: AnalysisPage
				}
			]
		}
		
	]
})