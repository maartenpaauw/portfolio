<template lang="pug">
  b-row.my-5
    b-col.text-center
      h1.h3.font-weight-bold.text-uppercase(v-html="title",
                                            :class="color")
      span.fw2.silver(v-html="subtitle")
      border(:color="color")
</template>

<script>
  import Border from '@/components/Helpers/Border'

  export default {
    name: 'portfolio-title',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      color: {
        required: true,
        type: String
      }
    },
    components: {
      border: Border
    }
  }
</script>

<style lang="scss" scoped="scoped">
  h2 {
    line-height: 2rem;
  }
</style>
