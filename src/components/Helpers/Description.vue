<template lang="pug">
  b-row.mt-5(align-h="center")
    b-col.text-center(lg="8",
                      md="12")
      span.small.silver.lh-2
        p.mb-0
          slot
</template>

<script>
  export default {
    name: 'portfolio-description'
  }
</script>
