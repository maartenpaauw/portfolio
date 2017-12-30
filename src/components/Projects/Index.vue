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

  import Categories from '@/components/Projects/Categories'
  import Project from '@/components/Projects/Project'
  import Section from '@/components/Helpers/Section'

  import active from '@/mixins/active'
  import download from '@/mixins/download'

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
      projectsProject: Project
    },
    computed: {
      ...mapGetters('projects', [
        'filtered'
      ])
    },
    mixins: [
      active,
      download
    ]
  }
</script>
