<template lang="pug">
  introduction-section(:id="id", 
                       v-observe-visibility="setActive",
                       :title="name",
                       :subtitle="label")
    .row.my-5(v-observe-visibility="setActive")
      .col
        introduction-information(label="Functie",
                                 :value="label")
        introduction-link(label="Adres",
                          :href="maps",
                          :blank="true")
            span.d-block(v-html="location.address")
            span.d-block(v-html="`${location.postalCode} ${location.city}`")
            span.d-block(v-html="location.region")
        introduction-link(label="E-mailadres",
                         :href="mailto",
                         :value="email")
        introduction-link(label="Mobiel",
                         :href="tel",
                         :value="phone")
        introduction-information(label="Geboren",
                                 :value="born")
        introduction-information(label="Nationaliteit",
                                 :value="nationality")
        introduction-information(label="talen")
          introduction-languages
        introduction-information(label="Geslacht",
                                 :value="gender")
        introduction-information(label="Burgelijke staat",
                                 :value="marital_status")
        introduction-information(label="Rijbewijs",
                                 :value="licenses")
      .col
        introduction-summary
        introduction-signature(:name="name")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'
  import moment from 'moment'

  import Section from '@/components/Helpers/Section'
  import Link from '@/components/Introduction/Link'
  import Signature from '@/components/Introduction/Signature'
  import Information from '@/components/Introduction/Information'
  import Languages from '@/components/Introduction/Languages'
  import Download from '@/components/Helpers/Download'
  import Summary from '@/components/Introduction/Summary'

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
      introductionLink: Link,
      IntroductionInformation: Information,
      IntroductionSignature: Signature,
      introductionLanguages: Languages,
      introductionSummary: Summary,
      cvDownload: Download
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'label',
        'email',
        'mailto',
        'phone',
        'location'
      ]),
      ...mapGetters('additions', [
        'birthday',
        'birthplace',
        'gender',
        'nationality',
        'marital_status',
        'drivers_license'
      ]),
      tel () {
        return `tel:${this.phone.replace(/\D+/g, '')}`
      },
      maps () {
        return `https://www.google.nl/maps/place/${this.location.address}, ${this.location.postalCode} ${this.location.city}/`.split(' ').join('+')
      },
      born () {
        return `${moment(this.birthday).format('D MMMM YYYY')} in ${this.birthplace}`
      },
      licenses () {
        return this.drivers_license.join(' + ')
      }
    },
    mixins: [
      active
    ]
  }
</script>
