<template lang="pug">
  stack-overflow-section(id="stack-overflow",
                         background-color="clouds",
                         title="Stack Overflow",
                         subtitle="Ervaring delen is kennis vermenigvuldigen")
    b-row(align-h="center")
      b-col.text-center(lg="8",
                        md="12")
        stack-overflow-badge(v-for="(badge, index) in badges",
                             :badge="badge",
                             :key="index")
    stack-overflow-description.mb-5
      span(v-html="description")
</template>

<script>
  import axios from 'axios'
  import autolinker from 'autolinker'

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
    computed: {
      description () {
        const description = 'Het platform stackoverflow.com is er voor professionele programmeurs om kennis te delen en op te doen. Hier kan je door vragen te stellen en te beantwoorden badges verdienen. Hierboven zie je de badges die ik gehaald heb. Als je op de badge klikt zie je meer informatie over de badge. Neem rustig een kijkje.'
        return autolinker.link(description, {
          className: 'concrete'
        })
      }
    },
    async created () {
      try {
        const response = await axios.get(`https://api.stackexchange.com/2.2/users/2940668/badges?site=stackoverflow&order=asc&sort=rank&filter=default&key=${process.env.STACK_EXCHANGE_KEY}`)
        this.badges = response.data.items
      } catch (err) {
        this.badges = null
      }
    }
  }
</script>
