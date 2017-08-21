// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueScrollTo from 'vue-scrollto'
import VueScroll from 'vue-scroll'
import VueObserveVisibility from 'vue-observe-visibility/dist/vue-observe-visibility'

import 'intersection-observer'

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
