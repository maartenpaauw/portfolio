<template lang="pug">
  b-row
    b-col(lg="8")
      p.text-uppercase.text-center.text-lg-left(:class="primary.color")
        b-badge.mr-2.white.bg-orange(v-if="recent",
                                     variant="warning",
                                     tag="sup") Nieuw
        strong(v-html="title")
      p(v-if="website")
        a.concrete.d-flex.align-items-center.justify-content-center.justify-content-lg-start.hover-asbestos.hover-text-decoration-none.transition-400(:href="website", 
                                                                                                                                                      target="_blank",
                                                                                                                                                      rel="noopener")
          font-awesome-icon.mr-2(:icon="['fas', icon]")
          span(v-html="subtitle")
      p.concrete.d-flex.align-items-center.justify-content-center.justify-content-lg-start(v-else="")
        font-awesome-icon.mr-2(:icon="['fas', icon]")
        span(v-html="subtitle")
      p.silver.fw1.lh-2.text-center.text-lg-left(v-html="summary")
    b-col.text-right.small.silver(lg="4")
      p.d-flex.align-items-center.justify-content-center.justify-content-lg-end
          font-awesome-icon.mr-2(:icon="['fas', 'calendar']").mr-2
          span(v-html="date")
    b-col(lg="8")
      hr.mt-3.mb-0.border-clouds
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'experiences-experience',
    props: {
      experience: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
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
        return typeof this.experience.end === 'undefined' ? 'heden' : this.$moment(this.experience.end).format('MMMM YYYY')
      },
      recent () {
        return this.$moment().subtract(1, 'month') <= this.$moment(this.experience.start)
      }
    }
  }
</script>

<style lang="scss" scoped>
  sup {
    top: -0.15em;
  }
</style>
