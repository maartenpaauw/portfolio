<template lang="pug">
  b-col.text-center.p-3(cols="2")
    font-awesome-icon.cursor-pointer(:icon="icon",
                                     size="2x",
                                     :class="primary.color",
                                     @click="click")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'references-control',
    props: {
      direction: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      icon () {
        const directions = {
          next: 'right',
          previous: 'left'
        }
        return `chevron-${directions[this.direction]}`
      }
    },
    methods: {
      ...mapActions('references', [
        'next',
        'previous'
      ]),
      click () {
        this[this.direction]()
      }
    }
  }
</script>
