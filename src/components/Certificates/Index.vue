<template lang="pug">
  certificates-section(:id="id",
                       v-observe-visibility="setActive",
                       title="Certificaten",
                       subtitle="Voor specialistische kennis")
    template(v-for="(vocation, index) in vocational")
      certificates-vocation(:vocation="vocation",
                            :key="index")
    cv-download
</template>

<script>
  import { mapGetters } from 'vuex'

  import Vocation from '@/components/Certificates/Vocation'
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
      certificatesVocation: Vocation
    },
    computed: {
      ...mapGetters('resume', {
        '_vocational': 'vocational'
      }),
      vocational () {
        return this._vocational.map((vocation) => {
          vocation.accreditations = vocation.accreditations.map((accreditation) => {
            return {
              title: accreditation.title,
              subtitle: 'Certificaat',
              summary: null,
              start: accreditation.achievedDate,
              end: accreditation.expireDate,
              icon: 'certificate',
              url: accreditation.verification,
              doesNotExpire: accreditation.doesNotExpire
            }
          })
          return vocation
        })
      }
    },
    mixins: [
      active,
      download
    ]
  }
</script>
