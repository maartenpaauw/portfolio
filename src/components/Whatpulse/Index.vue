<template lang="pug">
  whatpulse-section(id="whatpulse",
                    background-color="clouds")
    .row.text-center
      whatpulse-stat(type="keys")
      whatpulse-stat(type="clicks")
    whatpulse-description
      | Als
      |
      span(v-html="label")
      |
      | ben je altijd in beweging. Hard werken vertaald zich in het aantal toetsaanslagen en muisklikken. En een echte ICT'er houdt natuurlijk netjes deze lichaamsbeweging bij. Dat wil zeggen: laten bijhouden door
      |
      a.asbestos(href="http://www.whatpulse.org/",
                 target="_blank",
                 rel="noopener") Whatpulse
      |. Want wat je door de ICT kan laten doen, doe je niet zelf.
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Description from '@/components/Helpers/Description'
  import Stat from '@/components/Whatpulse/Stat'

  export default {
    name: 'portfolio-whatpulse',
    components: {
      whatpulseSection: Section,
      whatpulseDescription: Description,
      whatpulseStat: Stat
    },
    computed: {
      ...mapGetters('basics', [
        'label'
      ])
    }
  }
</script>
