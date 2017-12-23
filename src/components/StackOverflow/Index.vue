<template lang="pug">
  stack-overflow-section(id="stack-overflow",
                         background-color="clouds",
                         title="Stack Overflow",
                         subtitle="Ervaring delen is kennis vermenigvuldigen")
    .row.justify-content-center
      .col-8.text-center
        stack-overflow-badge(v-for="(badge, index) in badges",
                             :badge="badge",
                             :key="index")
    stack-overflow-description
      a.asbestos(href="https://stackoverflow.com/",
                 target="_blank",
                 rel="noopener") Stack Overflow
      |
      | is
      |
      i het
      |
      | platform voor professionele programmeurs om kennis te delen en op te doen. Hier kan je door vragen te stellen en te beantwoorden badges verdienen. Hierboven zie je de badges die ik gehaald heb. Als je op de badge klikt zie je meer informatie over de badge. Neem rustig een kijkje.
</template>

<script>
  import axios from 'axios'

  import Section from '@/components/Helpers/Section'
  import Description from '@/components/Helpers/Description'
  import Badge from '@/components/StackOverflow/Badge'

  export default {
    name: 'portfolio-stack-overflow',
    data () {
      return {
        badges: []
      }
    },
    components: {
      stackOverflowSection: Section,
      stackOverflowDescription: Description,
      stackOverflowBadge: Badge
    },
    async created () {
      try {
        const response = await axios.get('https://api.stackexchange.com/2.2/users/2940668/badges?site=stackoverflow&order=asc&sort=rank&filter=default')
        this.badges = response.data.items
      } catch (err) {
        this.badges = null
      }
    }
  }
</script>
