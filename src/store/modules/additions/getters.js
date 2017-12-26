export default {
  birthday: (state, getters, rootState) => {
    return rootState.resume.additions.birthday
  },
  birthplace: (state, getters, rootState) => {
    return rootState.resume.additions.birthplace
  },
  gender: (state, getters, rootState) => {
    return rootState.resume.additions.gender
  },
  nationality: (state, getters, rootState) => {
    return rootState.resume.additions.nationality
  },
  marital_status: (state, getters, rootState) => {
    return rootState.resume.additions.marital_status
  },
  drivers_license: (state, getters, rootState) => {
    return rootState.resume.additions.drivers_license
  }
}
