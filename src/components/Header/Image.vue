<template lang="pug">
  b-container.h-25(:fluid="true")
    b-row.h-100
      b-col.text-center
        b-img.border-0(:src="image",
                       alt="Maarten Paauw",
                       width="200",
                       height="200",
                       rounded="circle",
                       :fluid="true",
                       :thumbnail="true")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'header-image',
    computed: {
      ...mapGetters('basics', [
        'image'
      ])
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .container-fluid {
    margin-top: -100px;
  }
</style>
