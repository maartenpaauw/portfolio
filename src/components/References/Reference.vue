<template lang="pug">
  b-col
    blockquote.lh-2.text-center
      p.mb-0.midnight-blue.fw3(v-html="reference.reference")
      footer.blockquote-footer.silver(v-html="reference.name")
</template>

<script>
  export default {
    name: 'references-reference',
    props: {
      reference: {
        required: true,
        type: Object
      }
    }
  }
</script>
