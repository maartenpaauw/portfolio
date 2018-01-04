import Vue from 'vue'
import moment from 'moment'

Vue.use({
  install (Vue, name = '$moment') {
    moment.locale('nl')
    Vue.prototype[name] = moment
  }
})
