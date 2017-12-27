import _ from 'lodash'

export default {
  projects: (state, getters, rootState) => {
    return rootState.resume.projects
  },
  index: (state, getters) => {
    return state.index
  },
  categories: (state, getters) => {
    const categories = ['Alles']

    _.each(getters.projects, (project) => {
      categories.push(project.type)
    })

    return _.uniq(categories).sort()
  }
}
