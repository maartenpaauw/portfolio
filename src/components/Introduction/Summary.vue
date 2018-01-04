<template lang="pug">
  span.text-center.text-lg-left.silver.fw2.lh-2
    p(v-html="salutation")
    p(v-html="_summary")
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
      _summary () {
        return this.summary
          .replace('[AGE]', this.age)
          .replace('[LABEL]', this.label)
      },
      salutation () {
        return `Beste ${this.$route.query.visitor ? this.$route.query.visitor : 'bezoeker'},`
      }
    }
  }
</script>
