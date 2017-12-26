export default {
  index: state => {
    return state.index
  },
  reference: (state, getters, rootState) => {
    return rootState.resume.references[state.index]
  }
}
