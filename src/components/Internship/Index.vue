<template lang="pug">
  internship-section(id="internship",
                     background-color="midnight-blue")
    .row
      .col.text-center
        h1.h2.text-white.fw5 Momenteel ben ik op zoek naar een stageplaats.
        p.mt-3.mb-5.silver.fw2 Van {{ from }} tot en met {{ to }}.
        internship-button(:href="mailto")
          i.fa.fa-check.mr-2
          span.fw1 Mail mij
</template>

<script>
  import { mapGetters } from 'vuex'

  import Section from '@/components/Helpers/Section'
  import Button from '@/components/Helpers/Button'

  export default {
    name: 'portfolio-internship',
    props: {
      period: {
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
        return new Intl.DateTimeFormat(['nl-NL'], {
          day: 'numeric',
          month: 'long'
        }).format(new Date(this.period.from))
      },
      to () {
        return new Intl.DateTimeFormat(['nl-NL'], {
          day: 'numeric',
          month: 'long'
        }).format(new Date(this.period.to))
      },
      mailto () {
        return `mailto:${this.email}?subject=Stageplaats`
      }
    }
  }
</script>
