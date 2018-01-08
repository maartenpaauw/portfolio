<template lang="pug">
  b-button.text-uppercase(:variant="variant",
                          :class="classes",
                          :href="href")
    slot
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'portfolio-button',
    props: {
      href: {
        required: false,
        type: String
      },
      theme: {
        required: false,
        type: String,
        default: 'dark'
      }
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      themes () {
        return {
          dark: {
            variant: 'btn-outline-secondary',
            classes: [
              'bg-transparent',
              'border-asbestos',
              'asbestos',
              'hover-white',
              'border-hover-white'
            ]
          },
          light: {
            variant: 'secondary',
            classes: [
              'bg-transparent',
              'hover-white',
              this.primary.color,
              this.primary.background.hover,
              this.primary.border.color
            ]
          }
        }
      },
      variant () {
        return this.themes[this.theme].variant
      },
      classes () {
        return this.themes[this.theme].classes
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
