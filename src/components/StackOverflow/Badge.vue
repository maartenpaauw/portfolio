<template lang="pug">
  b-badge.bg-asbestos.mt-2.mr-2.px-2.pointer(variant="default",
                                             @click="open")
    i.fa.fa-circle.mr-2(:class="rank")
    span.fw4.text-white(v-html="label")
</template>

<script>
  export default {
    props: {
      badge: {
        required: false,
        type: Object
      }
    },
    computed: {
      rank () {
        return `badge-${this.badge.rank.toLowerCase()}`
      },
      name () {
        return this.badge.name
      },
      link () {
        return this.badge.link
      },
      count () {
        return this.badge.award_count
      },
      label () {
        return this.count > 1 ? `${this.name} &times; ${this.count}` : this.name
      }
    },
    methods: {
      open () {
        window.open(this.link, '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .pointer { cursor: pointer; }

  .badge-bronze {
    color: rgb(204, 160, 125);
  }

  .badge-silver {
    color: rgb(175, 179, 183);
  }

  .badge-gold {
    color: rgb(254, 203, 9);
  }
</style>
