export default {
  work: (state, getters, rootState, rootGetters) => {
    return rootGetters['resume/work']
  },
  relevant: (state, getters) => {
    return getters.work.filter((work) => {
      return state.irrelevant ? work.relevant : true
    })
  },
  irrelevant: state => {
    return state.irrelevant
  }
}
