<template lang="pug">
  b-row
    b-col.mt-3.d-md-none.d-lg-none(cols="12")
    b-col.text-center.text-md-right.text-lg-left(lg="4",
                                                 md="5")
      p.mb-0.text-uppercase.midnight-blue.lh-2(v-html="label")
    b-col.text-center.text-md-left
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
