<template lang="pug">
  projects-section(:id="id",
                     title="Projecten",
                     subtitle="Voorbeelden van gerealiseerd werk",
                     v-observe-visibility="setActive")
    projects-categories
    b-card-group.row.mt-5
      projects-project(v-for="(project, index) in filtered",
                       :project="project",
                       :key="index")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Categories from '@/components/Projects/Categories'
  import Project from '@/components/Projects/Project'
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
      projectsProject: Project,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('projects', [
        'filtered'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
