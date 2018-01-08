<template lang="pug">
  introduction-information(:label="label")
    a.silver.lh-2.hover-text-decoration-none.transition-400(:href="href",
                                                            :class="primary.hover",
                                                            :target="target",
                                                            rel="noopener")
      span(v-if="value"
           v-html="value")
      slot(v-else)
</template>

<script>
  import { mapGetters } from 'vuex'

  import Information from '@/components/Introduction/Information'

  export default {
    name: 'introduction-link',
    props: {
      label: {
        required: true,
        type: String
      },
      href: {
        required: true,
        type: String
      },
      value: {
        required: false,
        type: String
      },
      blank: {
        required: false,
        type: Boolean,
        default: false
      }
    },
    components: {
      introductionInformation: Information
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      target () {
        return this.blank ? '_blank' : null
      }
    }
  }
</script>
