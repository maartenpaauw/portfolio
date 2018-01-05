<template lang="pug">
  introduction-section(:id="id", 
                       :title="name",
                       :subtitle="label",
                       v-observe-visibility="setActive")
    b-row.my-5(v-observe-visibility="setActive")
      b-col.mb-5(lg="6",
                 order-lg="2")
        introduction-summary
        introduction-signature
      b-col(lg="6",
            order-lg="1")
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
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Link from '@/components/Introduction/Link'
  import Signature from '@/components/Introduction/Signature'
  import Information from '@/components/Introduction/Information'
  import Languages from '@/components/Introduction/Languages'
  import Summary from '@/components/Introduction/Summary'

  import active from '@/mixins/active'
  import download from '@/mixins/download'

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
      introductionSummary: Summary
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'label',
        'email',
        'mailto',
        'phone',
        'tel',
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
      maps () {
        return `https://www.google.nl/maps/place/${this.location.address}, ${this.location.postalCode} ${this.location.city}/`.split(' ').join('+')
      },
      born () {
        return `${this.$moment(this.birthday).format('D MMMM YYYY')} te ${this.birthplace}`
      },
      licenses () {
        return this.drivers_license.join(' + ')
      }
    },
    mixins: [
      active,
      download
    ]
  }
</script>
