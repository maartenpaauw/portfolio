<template lang="pug">
  b-row.mt-5(align-h="center")
    .col-8.text-center
      span.small.silver.lh-2
        p.mb-0
          slot
</template>

<script>
  export default {
    name: 'portfolio-description'
  }
</script>
