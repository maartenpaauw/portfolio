<template lang="pug">
  b-col.text-center.p-3(cols="2")
    font-awesome-icon.midnight-blue.cursor-pointer(:icon="icon",
                                                   size="2x",
                                                   @click="click")
</template>

<script>
  import { mapActions } from 'vuex'

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
