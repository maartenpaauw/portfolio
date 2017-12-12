import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import additions from './modules/additions'
import basics from './modules/basics'
import resume from './modules/resume'
import menu from './modules/menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    additions,
    basics,
    resume,
    menu
  }
})
