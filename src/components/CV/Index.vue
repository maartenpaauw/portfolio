<template lang="pug">
  cv-section(:id="id",
             title="Curriculum Vitae",
             subtitle="Hier heb ik mijn ervaringen opgedaan",
             v-observe-visibility="setActive")

    cv-experiences(title="Opleidingen",
                   :experiences="_education")

    cv-experiences(title="Werkervaring",
                   :experiences="_work")

    cv-experiences(title="Vrijwillig",
                   :experiences="_volunteer")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'
  import slugify from 'slugify'

  import Section from '@/components/Helpers/Section'
  import Experiences from '@/components/Experiences/Index'
  import Download from '@/components/Helpers/Download'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-cv',
    components: {
      cvSection: Section,
      cvExperiences: Experiences,
      cvDownload: Download
    },
    data () {
      return {
        id: 'cv'
      }
    },
    computed: {
      ...mapGetters('resume', [
        'work',
        'education',
        'volunteer'
      ]),
      _work () {
        return this.work.map((work) => {
          return {
            title: work.position,
            subtitle: work.name,
            summary: work.summary,
            start: work.startDate,
            end: work.endDate,
            icon: 'fa-briefcase',
            url: work.url
          }
        })
      },
      _education () {
        return this.education.map((education) => {
          return {
            title: education.area,
            subtitle: education.institution,
            summary: education.studyType,
            start: education.startDate,
            end: education.endDate,
            icon: 'fa-graduation-cap',
            url: this.inFuture(education.endDate) ? null : this.file(education)
          }
        })
      },
      _volunteer () {
        return this.volunteer.map((volunteer) => {
          return {
            title: volunteer.position,
            subtitle: volunteer.organization,
            summary: volunteer.summary,
            start: volunteer.startDate,
            end: volunteer.endDate,
            icon: 'fa-handshake-o',
            url: volunteer.url
          }
        })
      }
    },
    methods: {
      inFuture (end) {
        return new Date(end) >= new Date()
      },
      file (education) {
        return `./static/education/${slugify(education.institution + ' ' + education.area + ' ' + education.studyType).toLowerCase()}.pdf`
      }
    },
    mixins: [
      active
    ]
  }
</script>
