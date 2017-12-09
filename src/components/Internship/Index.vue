<template lang="pug">
  internship-section(:id="id",
                     background-color="midnight-blue",
                     v-show="show")
    .row
      .col.text-center
        h1.h2.text-white Momenteel ben ik op zoek naar een {{ internship.type }}.
        p.mt-3.mb-5.silver.fw2 Van {{ from }} tot en met {{ to }}.
        internship-button(:href="mailto",
                          variant="dark")
          i.fa.fa-check.mr-2
          span.fw1 Mail mij
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-internship',
    props: {
      internship: {
        required: true,
        type: Object
      }
    },
    components: {
      internshipSection: Section,
      internshipButton: Button
    },
    computed: {
      ...mapGetters('basics', [
        'email'
      ]),
      from () {
        return this.$moment(this.internship.from).format('D MMMM')
      },
      to () {
        return this.$moment(this.internship.to).format('D MMMM YYYY')
      },
      mailto () {
        return `mailto:${this.email}?subject=${_.upperFirst(this.internship.type)}`
      },
      show () {
        const inThird = this.$moment().isBetween(this.$moment('2017-07-17'), this.$moment('2018-07-16'))
        const inFourth = this.$moment().isBetween(this.$moment('2018-07-16'), this.$moment('2019-07-15'))
        return this.visible(inThird, 'stage') || this.visible(inFourth, 'afstudeerstage')
      },
      id () {
        return `internship-${this.internship.type}`
      }
    },
    methods: {
      visible (inPeriod, type) {
        return inPeriod && this.$moment().isBefore(this.internship.from) && this.internship.type === type
      }
    }
  }
</script>
