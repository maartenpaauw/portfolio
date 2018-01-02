<template lang="pug">
  section#copyright
    b-container.bg-wet-asphalt(:fluid="true")
      b-container
        b-row.text-center
          .col
            p.m-2.small.midnight-blue
              i.fa.fa-heart-o.mr-2
              a.midnight-blue.mr-2.b.hover-clouds.hover-text-decoration-none.transition-800(v-html="name",
                                                                                            :href="mailto",
                                                                                            target="_blank",
                                                                                            rel="noopener")
              span(v-html="year")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'footer-copyright',
    data () {
      return {
        started: new Date('2017').getFullYear()
      }
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
