<template lang="pug">
  .col-12.text-center
    i.fa.midnight-blue.cursor-pointer(v-for="(reference, index) in references",
                                      :class="classes(index)",
                                      :key="index",
                                      @click="click(index)")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'references-indicators',
    props: {
      references: {
        required: true,
        type: Array
      }
    },
    computed: {
      ...mapGetters('references', [
        'index'
      ])
    },
    methods: {
      ...mapActions('references', [
        'specific'
      ]),
      classes (index) {
        return [
          index === this.index ? 'fa-dot-circle-o' : 'fa-circle-o',
          {
            'mr-1': !(index === this.references.length - 1)
          }
        ]
      },
      click (index) {
        this.specific(index)
      }
    }
  }
</script>
