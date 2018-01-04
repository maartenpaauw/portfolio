<template lang="pug">
  footer-section(id="copyright",
                 background-color="wet-asphalt",
                 :padding="null")
    b-row.text-center
      b-col
        p.m-2.small.midnight-blue
          font-awesome-icon.mr-2(:icon="['far', 'heart']")
          a.midnight-blue.mr-2.b.hover-clouds.hover-text-decoration-none.transition-800(v-html="name",
                                                                                        :href="mailto",
                                                                                        target="_blank",
                                                                                        rel="noopener")
          span(v-html="year")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'

  export default {
    name: 'footer-copyright',
    data () {
      return {
        started: new Date('2017').getFullYear()
      }
    },
    components: {
      footerSection: Section
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'mailto'
      ]),
      year () {
        const year = new Date().getFullYear()
        return this.started === year ? year : `${this.started} &mdash; ${year}`
      }
    }
  }
</script>
