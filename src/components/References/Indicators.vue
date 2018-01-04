<template lang="pug">
  b-col.text-center
    font-awesome-icon.midnight-blue.cursor-pointer(v-for="(reference, index) in references",
                                                   :icon="['far', icon(index)]",
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
      icon (index) {
        return index === this.index ? 'dot-circle' : 'circle'
      },
      classes (index) {
        return !(index === this.references.length - 1) ? 'mr-1' : null
      },
      click (index) {
        this.specific(index)
      }
    }
  }
</script>
