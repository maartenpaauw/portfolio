<template lang="pug">
  cv-section(:id="id",
             title="Curriculum Vitae",
             subtitle="Hier heb ik mijn ervaringen opgedaan",
             v-observe-visibility="setActive")

    cv-experiences(title="Opleidingen",
                   :experiences="_education")

    cv-experiences(title="Werkervaring",
                   :experiences="_work")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Experiences from '@/components/Experiences/Index'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-cv',
    components: {
      cvSection: Section,
      cvExperiences: Experiences
    },
    data () {
      return {
        id: 'cv'
      }
    },
    computed: {
      ...mapGetters('resume', [
        'work',
        'education'
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
            url: null
          }
        })
      }
    },
    mixins: [
      active
    ]
  }
</script>
