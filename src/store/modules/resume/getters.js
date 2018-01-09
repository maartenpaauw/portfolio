import _ from 'lodash'

export default {
  basics: state => {
    return state.basics
  },
  work: state => {
    return _.orderBy(state.work, [(work) => work.endDate || new Date().toISOString().substring(0, 10), 'startDate'], ['desc', 'desc'])
  },
  volunteer: state => {
    return _.orderBy(state.volunteer, ['endDate', 'startDate'], ['desc', 'desc'])
  },
  education: state => {
    return _.orderBy(state.education, ['endDate', 'startDate'], ['desc', 'desc'])
  },
  awards: state => {
    return state.awards
  },
  publications: state => {
    return state.publications
  },
  skills: state => {
    return state.skills.map((skill) => {
      skill.keywords = skill.keywords.sort((a, b) => {
        return a.localeCompare(b)
      })
      return skill
    })
  },
  languages: state => {
    return state.languages
  },
  interests: state => {
    return state.interests.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  },
  references: state => {
    return state.references
  },
  projects: state => {
    return _.orderBy(state.projects, [(project) => project.endDate || new Date().toISOString().substring(0, 10), 'startDate'], ['desc', 'desc'])
  },
  vocational: state => {
    return state.vocational.map((vocation) => {
      vocation.accreditations = _.orderBy(vocation.accreditations, ['achievedDate'], ['desc'])
      return vocation
    })
  }
}
