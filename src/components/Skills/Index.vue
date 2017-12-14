<template lang="pug">
  skills-section(:id="id",
                 title="Vaardigheden",
                 subtitle="1 logo zegt meer dan 1000 woorden",
                 v-observe-visibility="setActive")
    .row
      skills-group(v-for="(skill, index) in skills",
                   :key="index",
                   :skill="skill")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Section from '@/components/Helpers/Section'
  import Group from '@/components/Skills/Group'
  import Download from '@/components/Helpers/Download'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-skills',
    data () {
      return {
        id: 'skills'
      }
    },
    components: {
      skillsSection: Section,
      skillsGroup: Group,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('resume', [
        'skills'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
