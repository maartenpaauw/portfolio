<template lang="pug">
  b-col.text-center(cols="4",
                    lg="2",
                    md="3")
    i.fa.fa-2x.mb-3.transition-400(:class="[icon, { [hover]: hovered }]",
                                   @mouseover="toggle()",
                                   @mouseleave="toggle()")
    p.concrete.mb-5.text-uppercase.small(v-html="title")
</template>

<script>
  export default {
    name: 'portfolio-icon',
    props: {
      title: {
        required: true,
        type: String
      },
      icon: {
        required: true,
        type: String
      },
      hover: {
        required: false,
        type: String
      }
    },
    data () {
      return {
        hovered: false
      }
    },
    methods: {
      toggle () {
        this.hovered = !this.hovered
      }
    }
  }
</script>
