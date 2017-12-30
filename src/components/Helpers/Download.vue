<template lang="pug">
  .row
    .col.mb-5
      download.btn-sm(:href="cv",
                      target="_blank",
                      rel="noopener",
                      variant="light")
        span.fw2 download mijn cv
</template>

<script>
  import { mapGetters } from 'vuex'
  import slugify from 'slugify'

  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-download',
    components: {
      download: Button
    },
    computed: {
      ...mapGetters('basics', [
        'name'
      ]),
      cv () {
        return `./static/${slugify(this.name).toLowerCase()}.pdf`
      }
    }
  }
</script>
