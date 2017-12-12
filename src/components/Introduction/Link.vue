<template lang="pug">
  introduction-information(:label="label")
    a.silver.hover-midnight-blue.lh-2.hover-text-decoration-none.transition-400(:href="href",
                                                                                rel="noopener")
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
      }
    },
    components: {
      introductionInformation: Information
    }
  }
</script>
