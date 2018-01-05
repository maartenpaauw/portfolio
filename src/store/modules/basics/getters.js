export default {
  basics: (state, getters, rootState) => {
    return rootState.resume.basics
  },
  name: (state, getters) => {
    return getters.basics.name
  },
  label: (state, getters) => {
    return getters.basics.label
  },
  image: (state, getters) => {
    return getters.basics.image
  },
  email: (state, getters) => {
    return getters.basics.email
  },
  mailto: (state, getters) => {
    return `mailto:${getters.basics.email}`
  },
  phone: (state, getters) => {
    return getters.basics.phone
  },
  tel: (state, getters) => {
    return `tel:${getters.phone.replace(/\D+/g, '')}`
  },
  whatsapp: (state, getters) => {
    return `https://api.whatsapp.com/send?phone=${getters.phone.replace(/\D+/g, '')}`
  },
  website: (state, getters) => {
    return getters.basics.website
  },
  summary: (state, getters) => {
    return getters.basics.summary
  },
  location: (state, getters) => {
    return getters.basics.location
  },
  profiles: (state, getters) => {
    return getters.basics.profiles
  }
}
