import modulo from 'just-modulo'

const specific = (state, payload) => {
  state.reference.index = payload
}

const navigate = (state, payload) => {
  state.reference.index = modulo(state.reference.index += payload.increment, payload.last)
}

const toggleIrrelevant = (state, payload) => {
  state.work.irrelevant = !state.work.irrelevant
}

export default {
  specific,
  navigate,
  toggleIrrelevant
}
