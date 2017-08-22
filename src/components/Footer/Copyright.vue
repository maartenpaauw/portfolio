<template lang="pug">
  section#copyright
    .container-fluid.bg-wet-asphalt
      .container
        .row.text-center
          .col
            p.m-2.small.midnight-blue
              i.fa.fa-heart-o.mr-2
              a.midnight-blue.mr-2.b(v-html="name",
                                     :href="mailto",
                                     target="_blank")
              span(v-html="year")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'footer-copyright',
    data () {
      return {
        started: new Date('2017')
      }
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'email'
      ]),
      mailto () {
        return `mailto:${this.email}`
      },
      year () {
        const year = new Date().getFullYear()
        return this.started.getFullYear() === year ? year : `${this.started.getFullYear()} &mdash; ${year}`
      }
    }
  }
</script>
