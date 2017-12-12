<template lang="pug">
  a(:href="link",
    target="_blank",
    rel="noopener")
    b-badge.bg-asbestos.bg-hover-concrete.mt-2.mr-2.px-2.cursor-pointer.transition-400(variant="default")
      i.fa.fa-circle.mr-2(:class="rank")
      span.fw4.text-white(v-html="label")
</template>

<script>
  export default {
    name: 'stack-overflow-badge',
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
    }
  }
</script>

<style lang="scss" scoped="scoped">
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
