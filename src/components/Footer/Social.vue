<template lang="pug">
  b-row
    .col.text-center
      span(v-for="(profile, index) in profiles",
           :key="index")
        b-tooltip(:target="id(profile.network)",
                  :title="profile.network")
        a.mr-2.concrete.hover-clouds.transition-800(:href="profile.url",
                                                    :id="id(profile.network)",
                                                    target="_blank",
                                                    rel="noopener")
          i.fa.fa-lg(:class="icon(profile.network)")
</template>

<script>
  import { mapGetters } from 'vuex'
  import _ from 'lodash'
  import slugify from 'slugify'

  export default {
    name: 'footer-social',
    computed: {
      ...mapGetters('basics', [
        'profiles'
      ])
    },
    methods: {
      id (network) {
        return _.camelCase(network)
      },
      icon (network) {
        return `fa-${slugify(network).toLowerCase()}`
      }
    }
  }
</script>
