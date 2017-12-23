const previous = ({ commit, state }, payload) => {
  commit('navigate', {
    increment: -1,
    last: state.resume.references.length
  })
}

const next = ({ commit, state }, payload) => {
  commit('navigate', {
    increment: +1,
    last: state.resume.references.length
  })
}

const specific = ({ commit }, payload) => {
  commit('specific', payload)
}

const toggleIrrelevant = ({ commit }) => {
  commit('toggleIrrelevant')
}

export default {
  previous,
  next,
  specific,
  toggleIrrelevant
}
