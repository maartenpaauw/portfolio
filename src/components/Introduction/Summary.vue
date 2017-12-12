<template lang="pug">
  span.silver.fw2.lh-2
    p(v-html="summary")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'introduction-summary',
    computed: {
      ...mapGetters('basics', [
        'summary'
      ]),
      ...mapGetters('additions', [
        'birthday'
      ]),
      age () {
        return this.$moment().diff(this.birthday, 'years')
      }
    }
  }
</script>
