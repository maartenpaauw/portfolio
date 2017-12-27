<template lang="pug">
  projects-section(:id="id",
                     title="Projecten",
                     subtitle="Voorbeelden van gerealiseerd werk",
                     v-observe-visibility="setActive")
    projects-categories
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Categories from '@/components/Projects/Categories'
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
      projectsCategories: Categories,
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
