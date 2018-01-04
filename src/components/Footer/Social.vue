<template lang="pug">
  b-row
    b-col.text-center
      span(v-for="(profile, index) in profiles",
           :key="index")
        b-tooltip(:target="id(profile.network)",
                  :title="profile.network")
        a.mr-2.concrete.hover-clouds.transition-800(:href="profile.url",
                                                    :id="id(profile.network)",
                                                    target="_blank",
                                                    rel="noopener")
          font-awesome-icon(:icon="['fab', icon(profile.network)]")
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
        return slugify(network).toLowerCase()
      }
    }
  }
</script>
