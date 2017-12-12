<template lang="pug">
  introduction-information(:label="label")
    a.silver.hover-midnight-blue.lh-2.hover-text-decoration-none.transition-400(:href="href",
                                                                                rel="noopener",
                                                                                :target="target")
      span(v-if="value"
           v-html="value")
      slot(v-else)
</template>

<script>
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
      target () {
        return this.blank ? '_blank' : null
      }
    }
  }
</script>
