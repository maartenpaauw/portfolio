<template lang="pug">
  introduction-section(:id="id", 
                       v-observe-visibility="setActive",
                       :title="name",
                       :subtitle="label")
    .row.my-5(v-observe-visibility="setActive")
      .col
        introduction-information(label="Functie",
                                 :value="label")

        introduction-information(label="E-mailadres")
          a.silver.hover-midnight-blue.lh-2.hover-text-decoration-none.transition-400(:href="mailto",
                                                                                      v-html="email")

        introduction-information(label="Mobiel")
          a.silver.hover-midnight-blue.lh-2.hover-text-decoration-none.transition-400(:href="`tel:${tel}`",
                                                                                      v-html="phone")

        introduction-information(label="talen")
          introduction-languages

        introduction-information(label="Adres")
          a.silver.hover-midnight-blue.lh-2.hover-text-decoration-none.transition-400(:href="maps", 
                                                                                      target="_blank",
                                                                                      rel="noopener",)
            span.d-block(v-html="location.address")
            span.d-block(v-html="`${location.postalCode} ${location.city}`")
            span.d-block(v-html="location.region")

      .col
        p.silver.fw2.lh-2(v-html="summary")
        introduction-signature(:name="name")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Signature from '@/components/Introduction/Signature'
  import Information from '@/components/Introduction/Information'
  import Languages from '@/components/Introduction/Languages'
  import Download from '@/components/Helpers/Download'

  import active from '@/mixins/active'

  export default {
    name: 'portfolio-introduction',
    data () {
      return {
        id: 'introduction'
      }
    },
    components: {
      introductionSection: Section,
      IntroductionInformation: Information,
      IntroductionSignature: Signature,
      introductionLanguages: Languages,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'label',
        'summary',
        'email',
        'mailto',
        'phone',
        'location'
      ]),
      tel () {
        return this.phone.replace(/\D+/g, '')
      },
      maps () {
        return `https://www.google.nl/maps/place/${this.location.address.replace(' ', '+')},+${this.location.postalCode.replace(' ', '+')}+${this.location.city.replace(' ', '+')}/`
      }
    },
    mixins: [
      active
    ]
  }
</script>
