<template lang="pug">
  other-section(:id="id",
                background-color="clouds")
</template>

<script>
  import Section from '@/components/Helpers/Section'

  export default {
    name: 'portfolio-other',
    data () {
      return {
        id: 'other'
      }
    },
    components: {
      otherSection: Section
    }
  }
</script>
