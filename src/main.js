// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScroll from 'vue-scroll'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'
import store from './store'

import 'intersection-observer'
import './plugins/moment'
import './plugins/fa'
import './plugins/ga'

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueScrollTo)
Vue.use(VueScroll)
Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
