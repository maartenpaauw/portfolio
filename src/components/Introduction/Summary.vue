<template lang="pug">
  span.silver.fw2.lh-2
    p Beste bezoeker,
    p(v-html="replacedSummary")
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
      ...mapGetters('additions', [
        'birthday'
      ]),
      age () {
        return this.$moment().diff(this.birthday, 'years')
      },
      replacedSummary () {
        return this.summary
          .replace('[AGE]', this.age)
          .replace('[LABEL]', this.label)
      }
    }
  }
</script>
