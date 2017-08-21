<template lang="pug">
  certificates-section(:id="id",
                       v-observe-visibility="setActive",
                       title="Certificaten",
                       subtitle="Lorem ipsum dolor sit amet")
    experiences(v-for="(vocational, index) in vocationals",
                :title="vocational.issuingAuthority",
                :experiences="vocational.accreditations",
                :key="index")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Experiences from '@/components/Experiences/Index'

  import active from '@/mixins/active'

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
      active
    ]
  }
</script>
