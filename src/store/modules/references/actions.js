const next = ({ commit, rootState }, payload) => {
  commit('navigate', {
    increment: +1,
    last: rootState.resume.references.length
  })
}

const previous = ({ commit, rootState }, payload) => {
  commit('navigate', {
    increment: -1,
    last: rootState.resume.references.length
  })
}

const specific = ({ commit }, payload) => {
  commit('specific', payload)
}

export default {
  next,
  previous,
  specific
}
