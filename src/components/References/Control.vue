<template lang="pug">
  .col-2.text-center.mt-3
    i.fa.fa-3x.midnight-blue.p-2(:class="icon",
                                 @click="click")
</template>

<script>
  export default {
    name: 'references-control',
    props: {
      direction: {
        type: String,
        required: true
      }
    },
    computed: {
      icon () {
        const directions = {
          next: 'right',
          previous: 'left'
        }
        return `fa-angle-${directions[this.direction]}`
      }
    },
    methods: {
      click () {
        this.$store.dispatch(this.direction)
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  i {
    cursor: pointer;
  }
</style>
