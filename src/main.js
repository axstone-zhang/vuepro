// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import Layout from './components/layout'
import VueResource from 'vue-resource'
import CookieUtil from './assets/js/cookie.js'



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(CookieUtil)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})