<template lang="pug">
  b-button.text-uppercase(:variant="classes",
                          :href="href")
    slot
</template>

<script>
  export default {
    name: 'portfolio-button',
    props: {
      href: {
        required: false,
        type: String
      },
      variant: {
        required: false,
        type: String,
        default: 'dark'
      }
    },
    data () {
      return {
        variants: {
          dark: 'btn-outline-secondary bg-transparent border-asbestos asbestos hover-white border-hover-white',
          light: 'btn-secondary bg-transperant border-midnight-blue midnight-blue hover-white bg-hover-midnight-blue'
        }
      }
    },
    computed: {
      classes () {
        return this.variants[this.variant]
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .bg-hover-transparent {
    &:hover {
      background-color: transparent;
    }
  }
</style>
