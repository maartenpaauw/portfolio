export default {
  projects: (state, getters, rootState) => {
    return rootState.resume.projects
  },
  index: (state, getters) => {
    return state.index
  },
  categories: (state, getters) => {
    return [
      'Alles',
      'Drukwerk',
      'Logo',
      'Web development'
    ]
  }
}
