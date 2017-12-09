// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import VueResource from 'vue-resource'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScroll from 'vue-scroll'
import VueScrollTo from 'vue-scrollto'

import App from './App'
import router from './router'
import store from './store'
import momentPlugin from './plugins/moment'

import 'intersection-observer'

Vue.use(momentPlugin)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueScrollTo)
Vue.use(VueScroll)
Vue.use(VueObserveVisibility)

Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_ANALYTICS,
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
