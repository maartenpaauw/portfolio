const vcard = require('json-resume-to-vcard')
const moment = require('moment')
const resume = require('../src/resume/resume.json')
const { additions } = require('../src/resume/additions.json')

const birthday = moment(additions.birthday)

new vcard(resume, {
  birthday: {
    year: birthday.format('YYYY'),
    month: birthday.format('M'),
    day: birthday.format('D')
  },
  gender: {
    sex: 'M'
  }
}).toFile('./static/')
