<template lang="pug">
  span
    span(v-for="(language, index) in languages",
         :key="index")
      b-tooltip(:target="language.language.toLowerCase()",
                :title="language.language")
      span.mr-1.mt-1.flag-icon(:class="flag(language.language)",
                               :id="language.language.toLowerCase()")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'introduction-languages',
    computed: {
      ...mapGetters('resume', [
        'languages'
      ])
    },
    methods: {
      flag (language) {
        return {
          nederlands: 'flag-icon-nl',
          engels: 'flag-icon-gb'
        }[language.toLowerCase()]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "~flag-icon-css/css/flag-icon.min.css";
</style>
