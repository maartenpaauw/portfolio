<template lang="pug">
  footer#footer
    b-container.p-5.bg-midnight-blue(:fluid="true")
      b-container
        footer-social
    footer-copyright
</template>

<script>
  import Copyright from '@/components/Footer/Copyright'
  import Social from '@/components/Footer/Social'

  export default {
    name: 'portfolio-footer',
    components: {
      footerSocial: Social,
      footerCopyright: Copyright
    }
  }
</script>
