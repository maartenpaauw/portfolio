<template lang="pug">
  b-row
    b-col.mb-5.text-center.text-lg-left
      download.btn-sm(:href="cv",
                      target="_blank",
                      rel="noopener",
                      theme="light")
        span.fw2 Download mijn vCard
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
        return `./static/${slugify(this.name).toLowerCase()}.vcf`
      }
    }
  }
</script>
