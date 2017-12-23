<template lang="pug">
  .row
    .col-8
      p
        strong.text-uppercase.midnight-blue(v-html="title")
      p(v-if="website")
        a.concrete.d-flex.align-items-center.hover-asbestos.hover-text-decoration-none.transition-400(:href="website", 
                                                                                                      target="_blank",
                                                                                                      rel="noopener")
          i.fa.mr-2(:class="icon")
          span(v-html="subtitle")
      p.concrete.d-flex.align-items-center(v-else="")
        i.fa.mr-2(:class="icon")
        span(v-html="subtitle")
      p.silver.summary.fw1.lh-2(v-html="summary")
      hr.mt-3.mb-0.border-clouds
    .col-4.text-right.small.silver
      p.d-flex.align-items-center
          i.fa.fa-calendar.mr-2.ml-auto
          span(v-html="date")
</template>

<script>
  export default {
    name: 'experiences-experience',
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
        return this.$moment(this.experience.start).format('MMMM YYYY')
      },
      end () {
        return typeof this.experience.end === 'undefined' ? 'Huidig' : this.$moment(this.experience.end).format('MMMM YYYY')
      }
    }
  }
</script>
