<template lang="pug">
  b-button.text-uppercase(:variant="variant",
                          :href="href")
    slot
</template>

<script>
  export default {
    name: 'portfolio-button',
    props: {
      href: {
        required: false,
        value: String
      },
      variant: {
        required: false,
        value: String,
        default: 'outline-secondary'
      }
    }
  }
</script>
