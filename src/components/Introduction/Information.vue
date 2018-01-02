<template lang="pug">
  b-row
    .col-4
      p.mb-0.text-uppercase.midnight-blue.lh-2(v-html="label")
    .col
      p.mb-0.silver.fw2.lh-2(v-if="value",
                             v-html="value")
      span.fw2(v-else)
        slot
</template>

<script>
  export default {
    name: 'introduction-information',
    props: {
      label: {
        required: true,
        type: String
      },
      value: {
        required: false,
        type: String
      }
    }
  }
</script>
