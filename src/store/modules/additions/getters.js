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
  drivers_license: (state, getters) => {
    return getters.additions.drivers_license.sort()
  },
  gender: (state, getters) => {
    return getters.additions.gender
  },
  marital_status: (state, getters) => {
    return getters.additions.marital_status
  },
  nationality: (state, getters) => {
    return getters.additions.nationality
  }
}
