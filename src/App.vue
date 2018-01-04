<template lang="pug">
  #app.h-100
    router-view
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters('basics', [
        'name'
      ])
    },
    created () {
      document.title = `${this.name} — CV + Portfolio`
    }
  }
</script>

<style lang="scss">
  // Helpers
  @import "~css-font-weight/css/font-weight.min.css";
  @import "~css-line-height/css/line-height.min.css";
  @import "~css-cursors/css/css-cursors.min.css";
  @import "~flat-ui-colors-helper";

  // NPM
  @import "~typeface-montserrat/index.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "~bootstrap/scss/bootstrap";
  @import "~font-awesome/css/font-awesome.min.css";
  @import "~animate.css/animate.min.css";

  // Custom
  @import "./assets/scss/main";
  @import "./assets/scss/skills";
  @import "./assets/scss/hovered";
</style>
