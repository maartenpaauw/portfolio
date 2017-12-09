<template lang="pug">
  projects-section(:id="id",
                     title="Projecten",
                     subtitle="Lorem ipsum dolor sit amet",
                     v-observe-visibility="setActive")
        cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Download from '@/components/Helpers/Download'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-projects',
    data () {
      return {
        id: 'projects'
      }
    },
    components: {
      projectsSection: Section,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('resume', [
        'projects'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
