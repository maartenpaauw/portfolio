export default {
  name: (state, getters, rootState) => {
    return rootState.resume.basics.name
  },
  label: (state, getters, rootState) => {
    return rootState.resume.basics.label
  },
  image: (state, getters, rootState) => {
    return rootState.resume.basics.image
  },
  email: (state, getters, rootState) => {
    return rootState.resume.basics.email
  },
  mailto: (state, getters, rootState) => {
    return `mailto:${rootState.resume.basics.email}`
  },
  phone: (state, getters, rootState) => {
    return rootState.resume.basics.phone
  },
  website: (state, getters, rootState) => {
    return rootState.resume.basics.website
  },
  summary: (state, getters, rootState) => {
    return rootState.resume.basics.summary
  },
  location: (state, getters, rootState) => {
    return rootState.resume.basics.location
  },
  profiles: (state, getters, rootState) => {
    return rootState.resume.basics.profiles
  }
}
