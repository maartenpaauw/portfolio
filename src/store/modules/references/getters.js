export default {
  index: state => {
    return state.index
  },
  reference: (state, getters) => {
    return getters.references[state.index]
  },
  references: (state, getter, rootState) => {
    return rootState.resume.references
  }
}
