export default {
  basics: (state, getters, rootState, rootGetters) => {
    return rootGetters['resume/basics']
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
  url: (state, getters) => {
    return getters.basics.url
  },
  summary: (state, getters) => {
    return getters.basics.summary
  },
  location: (state, getters) => {
    return getters.basics.location
  },
  maps: (state, getters) => {
    return `https://www.google.nl/maps/place/${getters.location.address}, ${getters.location.postalCode} ${getters.location.city}/`.split(' ').join('+')
  },
  profiles: (state, getters) => {
    return getters.basics.profiles.sort((a, b) => {
      return a.network.localeCompare(b.network)
    })
  }
}
