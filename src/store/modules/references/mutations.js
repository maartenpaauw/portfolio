import modulo from 'just-modulo'

const specific = (state, payload) => {
  state.index = payload
}

const navigate = (state, payload) => {
  state.index = modulo(state.index += payload.increment, payload.last)
}

export default {
  specific,
  navigate
}
