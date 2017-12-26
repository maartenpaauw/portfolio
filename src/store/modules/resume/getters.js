export default {
  basics: state => {
    return state.basics
  },
  work: state => {
    return state.work
  },
  relevant: (state, getters, rootState) => {
    return getters.work.filter((work) => {
      return rootState.work.irrelevant ? work.relevant : true
    })
  },
  volunteer: state => {
    return state.volunteer
  },
  education: state => {
    return state.education
  },
  awards: state => {
    return state.awards
  },
  publications: state => {
    return state.publications
  },
  skills: state => {
    return state.skills
  },
  languages: state => {
    return state.languages
  },
  interests: state => {
    return state.interests
  },
  references: state => {
    return state.references
  },
  projects: state => {
    return state.projects
  },
  vocational: state => {
    return state.vocational
  }
}
