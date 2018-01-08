<template lang="pug">
  footer#footer
    footer-section(id="questions",
                   color="clouds",
                   :background-color="primary.color",
                   title="Vragen?",
                   subtitle="Gewoon stellen")
      footer-question
      footer-social
    footer-copyright
</template>

<script>
  import { mapGetters } from 'vuex'
  import Section from '@/components/Helpers/Section'
  import Copyright from '@/components/Footer/Copyright'
  import Social from '@/components/Footer/Social'
  import Question from '@/components/Footer/Question'

  export default {
    name: 'portfolio-footer',
    components: {
      footerSection: Section,
      footerSocial: Social,
      footerCopyright: Copyright,
      footerQuestion: Question
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ])
    }
  }
</script>
