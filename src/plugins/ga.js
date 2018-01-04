import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '../router'

Vue.use(VueAnalytics, {
  id: process.env.GOOGLE_ANALYTICS,
  router
})
