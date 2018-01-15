<template lang="pug">
  span.text-center.text-lg-left.silver.fw2.lh-2
    p(v-html="salutation")
    p(v-html="summary")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'introduction-summary',
    computed: {
      ...mapGetters('basics', [
        'label',
        'summary'
      ]),
      salutation () {
        return `Beste ${this.$route.query.visitor ? this.$route.query.visitor : 'bezoeker'},`
      }
    }
  }
</script>
