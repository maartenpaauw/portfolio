<template lang="pug">
  header.h-100(:id="id")
    portfolio-menu(:variant="variant")
    .container-fluid.bg-clouds.bg-image.h-75(v-observe-visibility="setVariant")
      .row.h-100.align-items-center
        .col.text-center.text-white
          h1.text-uppercase(v-html="title")
          h4.lh-2.fw2.mb-0(v-html="subtitle")

    portfolio-image
</template>

<script>
  import { mapGetters } from 'vuex'
  
  import Image from '@/components/Header/Image'
  import Menu from '@/components/Menu/Index'
  export default {
    name: 'portfolio-header',
    data () {
      return {
        variant: 'transparent-white',
        id: 'header'
      }
    },
    components: {
      portfolioImage: Image,
      portfolioMenu: Menu
    },
    computed: {
      ...mapGetters('basics', [
        'name',
        'label'
      ]),
      title () {
        return `Hallo, ik ben ${this.name.split(' ')[0]}`
      },
      subtitle () {
        return `Een ${this.label}`
      }
    },
    methods: {
      setVariant (isVisible, entry) {
        this.variant = isVisible ? 'transparent-white' : 'midnight-blue'
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .bg-image {
    background: url("../../assets/images/background.jpeg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
