<template lang="pug">
  whatpulse-section(id="whatpulse",
                    background-color="clouds")
    b-row.text-center
      whatpulse-stat(type="keys")
      whatpulse-stat(type="clicks")
    whatpulse-description
      span(v-html="description")
</template>

<script>
  import { mapGetters } from 'vuex'
  import autolinker from 'autolinker'

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
      ]),
      description () {
        const description = `Als ${this.label} ben je altijd in beweging. Hard werken vertaald zich in het aantal toetsaanslagen en muisklikken. En een echte ICT'er houdt natuurlijk netjes deze lichaamsbeweging bij. Dat wil zeggen: laten bijhouden door whatpulse.org. Want wat je door de ICT kan laten doen, doe je niet zelf.`
        return autolinker.link(description, {
          className: 'concrete'
        })
      }
    }
  }
</script>
