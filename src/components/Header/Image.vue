<template lang="pug">
  b-container.h-25(:fluid="true")
    b-row.h-100
      b-col.text-center
        vue-gravatar(:email="email",
                     :size="200",
                     class="img-fluid rounded-circle")
</template>

<script>
  import { mapGetters } from 'vuex'
  import Gravatar from 'vue-gravatar'

  export default {
    name: 'header-image',
    components: {
      vueGravatar: Gravatar
    },
    computed: {
      ...mapGetters('basics', [
        'email'
      ])
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .container-fluid {
    margin-top: -100px;

    img {
      border: 5px white solid;
    }
  }
</style>
