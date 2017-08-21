<template lang="pug">
  .row
    .col-8
      p
        strong.text-uppercase.midnight-blue(v-html="title")
      p(v-if="website")
        a.concrete.d-flex.align-items-center(:href="website", 
                                             target="_blank")
          i.fa.mr-2(:class="icon")
          span(v-html="subtitle")
      p.concrete.d-flex.align-items-center(v-else="")
        i.fa.mr-2(:class="icon")
        span(v-html="subtitle")
      p.silver.summary.fw1.lh-2(v-html="summary")
      hr.mt-3.mb-5
    .col-4.text-right.small.silver
      p.d-flex.align-items-center
          i.fa.fa-calendar.mr-2.ml-auto
          span(v-html="date")
</template>

<script>
  export default {
    name: 'experience',
    props: {
      experience: {
        type: Object,
        required: true
      }
    },
    computed: {
      title () {
        return this.experience.title
      },
      subtitle () {
        return this.experience.subtitle
      },
      website () {
        return this.experience.url
      },
      icon () {
        return this.experience.icon
      },
      summary () {
        return this.experience.summary
      },
      date () {
        return this.experience.doesNotExpire ? this.start : `${this.start} — ${this.end}`
      },
      start () {
        return new Intl.DateTimeFormat(['nl-NL'], {
          month: 'long',
          year: 'numeric'
        }).format(new Date(this.experience.start))
      },
      end () {
        return (this.experience.end === '') ? 'Huidig'
          : new Intl.DateTimeFormat(['nl-NL'], {
            month: 'long',
            year: 'numeric'
          }).format(new Date(this.experience.end))
      }
    }
  }
</script>

<style lang="scss" scoped="scoped">
  @import "../../../node_modules/flat-ui-colors-sass/flat-colors";

  a {
    &:hover {
      text-decoration: none;
      color: $flat-asbestos;
    }
  }
</style>
