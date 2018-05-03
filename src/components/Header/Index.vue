<template lang="pug">
  header.h-100(:id="id",
               v-observe-visibility="setActive")
    portfolio-menu(:variant="variant")
    b-container.bg-clouds.bg-image.h-75(:fluid="true",
                                        v-observe-visibility="setVariant")
      b-row(align-v="center").h-100
        b-col.text-center.text-white
          h1.text-uppercase(v-html="title")
          h4.lh-2.fw2.mb-0(v-html="subtitle")
    portfolio-image
</template>

<script>
  import { mapGetters } from 'vuex'
  import { parseFullName } from 'parse-full-name'
  
  import Image from '@/components/Header/Image'
  import Menu from '@/components/Menu/Index'
  
  import active from '@/mixins/active'

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
      ...mapGetters('theme', [
        'primary'
      ]),
      title () {
        return `Hallo, ik ben ${parseFullName(this.name).first}`
      },
      subtitle () {
        return `Een ${this.label}`
      }
    },
    methods: {
      setVariant (isVisible, entry) {
        this.variant = isVisible ? 'transparent-white' : this.primary.color
      }
    },
    mixins: [
      active
    ]
  }
</script>

<style lang="scss" scoped="scoped">
  .bg-image {
    background: url("../../assets/images/background.png") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
