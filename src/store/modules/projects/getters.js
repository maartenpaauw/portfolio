import _ from 'lodash'

export default {
  projects: (state, getters, rootState) => {
    return rootState.resume.projects
  },
  filtered: (state, getters) => {
    return getters.projects.filter((project) => {
      return project.type === getters.category || getters.index === 0
    })
  },
  index: (state, getters) => {
    return state.index
  },
  category: (state, getters) => {
    return getters.categories[getters.index]
  },
  categories: (state, getters) => {
    const categories = ['Alles']

    _.each(getters.projects, (project) => {
      categories.push(project.type)
    })

    return _.uniq(categories).sort()
  }
}
