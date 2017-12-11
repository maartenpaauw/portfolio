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
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-download',
    components: {
      download: Button
    },
    computed: {
      cv () {
        return '#' // TODO: CV download link
      }
    }
  }
</script>
