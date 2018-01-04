<template lang="pug">
  b-row.my-4(align-h="center")
    b-col(cols="4",
          sm="2",
          lg="1")
      hr.border-0(:class="backgroundColor")
</template>

<script>
  export default {
    name: 'portfolio-border',
    props: {
      color: {
        required: true,
        type: String
      }
    },
    computed: {
      backgroundColor () {
        return `bg-${this.color}`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  hr {
    height: 3px;
  }
</style>
