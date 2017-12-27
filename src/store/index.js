import Vue from 'vue'
import Vuex from 'vuex'

import additions from './modules/additions'
import basics from './modules/basics'
import menu from './modules/menu'
import projects from './modules/projects'
import references from './modules/references'
import resume from './modules/resume'
import work from './modules/work'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    additions,
    basics,
    menu,
    projects,
    references,
    resume,
    work
  }
})
