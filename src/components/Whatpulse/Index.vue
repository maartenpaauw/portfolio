<template lang="pug">
  whatpulse-section(id="whatpulse",
                    background-color="clouds")
    .row.text-center
      whatpulse-stat(type="keys")
      whatpulse-stat(type="clicks")
    whatpulse-description
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis turpis quis nulla lobortis tincidunt. Phasellus aliquam odio elit, nec pretium velit dapibus sit amet. Curabitur nec vestibulum lectus. Donec laoreet porta nisl in lobortis. Ut nec metus velit. Sed nec elementum tortor. Quisque ac leo rutrum, congue lectus vitae, rutrum nibh. Donec faucibus elit eu iaculis blandit.
</template>

<script>
  import Section from '@/components/Helpers/Section'
  import Description from '@/components/Helpers/Description'
  import Stat from '@/components/Whatpulse/Stat'

  export default {
    name: 'portfolio-whatpulse',
    components: {
      whatpulseSection: Section,
      whatpulseDescription: Description,
      whatpulseStat: Stat
    }
  }
</script>
