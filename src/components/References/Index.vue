<template lang="pug">
  references-section(:id="id",
                     title="Referenties",
                     subtitle="Wat vinden mensen van mij?",
                     v-observe-visibility="setActive")
    b-row
      references-control(direction="previous")
      b-col(cols="8")
        b-row
          transition(:duration="500",
                     enter-active-class="animated fadeIn",
                     leave-active-class="animated fadeOut",
                     mode="out-in")
            reference(:reference="reference", :key="reference.name")
      references-control(direction="next")
    b-row.mb-5
      references-indicators(:references="references")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Control from '@/components/References/Control'
  import Indicators from '@/components/References/Indicators'
  import Reference from '@/components/References/Reference'
  import Section from '@/components/Helpers/Section'

  import active from '@/mixins/active'
  import download from '@/mixins/download'

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
      ...mapGetters('references', [
        'reference',
        'references'
      ])
    },
    mixins: [
      active,
      download
    ]
  }
</script>
