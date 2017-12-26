export default {
  additions: (state, getters, rootState) => {
    return rootState.resume.additions
  },
  birthday: (state, getters) => {
    return getters.additions.birthday
  },
  birthplace: (state, getters) => {
    return getters.additions.birthplace
  },
  gender: (state, getters) => {
    return getters.additions.gender
  },
  nationality: (state, getters) => {
    return getters.additions.nationality
  },
  marital_status: (state, getters) => {
    return getters.additions.marital_status
  },
  drivers_license: (state, getters) => {
    return getters.additions.drivers_license
  }
}
