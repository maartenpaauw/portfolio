<template lang="pug">
  b-col.text-center(cols="6")
    b-card.m-0.mb-4(:overlay="true",
                    img-src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
                    body-class="d-flex")
      .m-auto
        h4.card-title.white(v-html="project.name")
        p.card-text.silver.fw-light(v-html="project.description")
        project-button.btn-sm(:href="project.url",
                              target="_blank",
                              rel="noopener",
                              variant="dark") Bekijk project
</template>

<script>
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
    }
  }
</script>
