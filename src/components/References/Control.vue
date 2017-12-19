<template lang="pug">
  .col-2.text-center.mt-3
    i.fa.fa-3x.midnight-blue.p-2.cursor-pointer(:class="icon",
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
        return `fa-angle-${directions[this.direction]}`
      }
    },
    methods: {
      ...mapActions([
        'next',
        'previous'
      ]),
      click () {
        this[this.direction]()
      }
    }
  }
</script>
