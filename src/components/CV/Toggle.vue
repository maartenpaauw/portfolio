<template lang="pug">
  b-row.mb-5
    .col-10.offset-2
      b-row
        .col-8.text-center(@click="toggleIrrelevant()")
          small.cursor-pointer
            i.fa.fa-arrow-up.transition-800(:class="rotation")
            span.d-block.silver(v-html="text")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'cv-toggle',
    computed: {
      ...mapGetters('work', [
        'irrelevant'
      ]),
      text () {
        return `toon ${this.irrelevant ? 'meer' : 'minder'}`
      },
      rotation () {
        return this.irrelevant ? 'fa-rotate-180' : null
      }
    },
    methods: {
      ...mapActions('work', [
        'toggleIrrelevant'
      ])
    }
  }
</script>
