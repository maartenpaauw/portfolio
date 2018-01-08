<template lang="pug">
  b-row.mb-5
    b-col(lg="10",
          offset-lg="2")
      b-row
        b-col.text-center(lg="8",
                          @click="toggleIrrelevant()")
          small.cursor-pointer
            font-awesome-icon.transition-800(icon="arrow-up",
                                             :rotation="rotation",
                                             :class="primary.color")
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
      ...mapGetters('theme', [
        'primary'
      ]),
      text () {
        return `toon ${this.irrelevant ? 'meer' : 'minder'}`
      },
      rotation () {
        return this.irrelevant ? 180 : null
      }
    },
    methods: {
      ...mapActions('work', [
        'toggleIrrelevant'
      ])
    }
  }
</script>
