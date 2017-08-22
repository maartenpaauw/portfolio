<template lang="pug">
  references-section(:id="id",
                     title="Referenties",
                     subtitle="Wat vinden mensen van mij?",
                     v-observe-visibility="setActive")
    .row
      references-control(direction="previous")
      reference(:reference="reference")
      references-control(direction="next")
    .row.mb-4
      references-indicators(:references="references")
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Section from '@/components/Helpers/Section'
  import Control from '@/components/References/Control'
  import Reference from '@/components/References/Reference'
  import Indicators from '@/components/References/Indicators'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-references',
    data () {
      return {
        id: 'references'
      }
    },
    components: {
      referencesSection: Section,
      referencesControl: Control,
      referencesIndicators: Indicators,
      reference: Reference
    },
    computed: {
      ...mapGetters('resume', [
        'reference',
        'references'
      ])
    },
    mixins: [
      active
    ]
  }
</script>
