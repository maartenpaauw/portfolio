<template lang="pug">
  span.text-center.text-lg-left
    p.m-0.silver.fw2.lh-2 Met vriendelijke groet,
    p.m-0.signature(v-html="signature",
                    :class="primary.color")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'introduction-signature',
    computed: {
      ...mapGetters('basics', [
        'name'
      ]),
      ...mapGetters('theme', [
        'primary'
      ]),
      signature () {
        return `${this.name}}`
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @font-face {
    font-family: 'Taken by Vultures';
    src: url('../../assets/fonts/taken-by-vultures.otf');
  }

  .signature {
    font-family: 'Taken by Vultures', fantasy;
    font-size: 5rem;
  }
</style>
