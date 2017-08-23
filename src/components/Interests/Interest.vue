<template lang="pug">
  .col.text-center
    i.fa.fa-2x.mb-3.midnight-blue(:class="classes",
                                  @mouseover="animate(true)",
                                  @mouseleave="animate(false)")
    p.concrete.text-uppercase.small(v-html="name")
</template>

<script>
  export default {
    name: 'interest',
    props: {
      interest: {
        required: true,
        type: Object
      },
      icon: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        classes: this.icon
      }
    },
    computed: {
      name () {
        return this.interest.name
      }
    },
    methods: {
      animate (hovered) {
        this.classes = hovered ? `${this.icon} animated tada` : this.icon
      }
    }
  }
</script>
