<template lang="pug">
  span
    p.midnight-blue
      span.d-block Met vriendelijke groet,
    p.midnight-blue
      b.d-block(v-html="name")
      i.asbestos.d-block(v-html="label")
    p
      small
        a.asbestos.d-block(v-html="phone",
                           :href="tel")
        a.asbestos.d-block(v-html="email",
                           :href="mailto")
        a.asbestos.d-block(v-html="url",
                           :href="url")
    p
      small
        a.asbestos(:href="maps")
          span.d-block(v-html="location.address")
          span.d-block(v-html="`${location.postalCode} ${location.city}`")
          span.d-block(v-html="location.region")
    
    p
      small
        b
          i
            a.midnight-blue(href="./static/maarten-paauw.vcf")
              | Download voor het gemak mijn vCard.
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'signature',
    computed: {
      ...mapGetters('basics', [
        'name',
        'label',
        'email',
        'mailto',
        'phone',
        'tel',
        'url',
        'location',
        'maps'
      ])
    }
  }
</script>
