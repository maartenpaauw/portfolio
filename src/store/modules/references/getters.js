export default {
  references: (state, getter, rootState, rootGetters) => {
    return rootGetters['resume/references']
  },
  index: (state) => {
    return state.index
  },
  reference: (state, getters) => {
    return getters.references[state.index]
  }
}
