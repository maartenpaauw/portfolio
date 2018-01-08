<template lang="pug">
  internship-section(:id="id",
                     :background-color="primary.color",
                     v-if="show")
    b-row
      b-col.text-center
        h1.h2.text-white Momenteel ben ik op zoek naar een {{ internship.type }}.
        p.mt-3.mb-5.silver.fw2 Van {{ from }} tot en met {{ to }}.
        internship-button(:href="mailto",
                          theme="dark")
          font-awesome-icon.mr-2(:icon="['fas', 'check']")
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
      ...mapGetters('theme', [
        'primary'
      ]),
      from () {
        return this.$moment(this.internship.from).format(this.sameYear ? 'MMMM' : 'MMMM YYYY')
      },
      to () {
        return this.$moment(this.internship.to).format('MMMM YYYY')
      },
      sameYear () {
        return this.internship.from.getFullYear() === this.internship.to.getFullYear()
      },
      mailto () {
        return `mailto:${this.email}?subject=${_.upperFirst(this.internship.type)}`
      },
      show () {
        return this.$moment().isBefore(this.internship.from)
      },
      id () {
        return `internship-${this.internship.type}`
      }
    }
  }
</script>
