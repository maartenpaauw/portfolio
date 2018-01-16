<template lang="pug">
  b-col.text-center(md="6")
    b-card.m-0.mb-4.border-0(:overlay="true",
                             img-src="https://images.unsplash.com/photo-1509624776920-0fac24a9dfda",
                             body-class="d-flex")
      .m-auto
        h4.card-title(v-html="project.name",
                      :class="primary.color")
        p.card-text.asbestos.fw-light(v-html="project.description")
        project-button.btn-sm(:href="project.url",
                              target="_blank",
                              rel="noopener",
                              theme="light") Bekijk project
</template>

<script>
  import { mapGetters } from 'vuex'

  import Button from '@/components/Helpers/Button'

  export default {
    name: 'projects-project',
    props: {
      project: {
        required: true,
        type: Object
      }
    },
    components: {
      projectButton: Button
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ])
    }
  }
</script>
