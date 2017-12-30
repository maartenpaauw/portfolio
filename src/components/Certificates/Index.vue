<template lang="pug">
  certificates-section(:id="id",
                       v-observe-visibility="setActive",
                       title="Certificaten",
                       subtitle="Voor specialistische kennis")
    experiences(v-for="(vocational, index) in vocationals",
                :title="vocational.issuingAuthority",
                :experiences="vocational.accreditations",
                :key="index")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Experiences from '@/components/Experiences/Index'
  import Section from '@/components/Helpers/Section'

  import active from '@/mixins/active'
  import download from '@/mixins/download'

  export default {
    name: 'portfolio-certificates',
    data () {
      return {
        id: 'certificates'
      }
    },
    components: {
      certificatesSection: Section,
      experiences: Experiences
    },
    computed: {
      ...mapGetters('resume', [
        'vocational'
      ]),
      vocationals () {
        return this.vocational.map((vocational) => {
          vocational.accreditations = vocational.accreditations.map((accreditations) => {
            return {
              title: accreditations.title,
              subtitle: 'Certificaat',
              summary: null,
              start: accreditations.achievedDate,
              end: accreditations.expireDate,
              icon: 'fa-certificate',
              url: accreditations.verification,
              doesNotExpire: accreditations.doesNotExpire
            }
          })
          return vocational
        })
      }
    },
    mixins: [
      active,
      download
    ]
  }
</script>
