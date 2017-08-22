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
      p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis turpis quis nulla lobortis tincidunt. Phasellus aliquam odio elit, nec pretium velit dapibus sit amet. Curabitur nec vestibulum lectus. Donec laoreet porta nisl in lobortis. Ut nec metus velit. Sed nec elementum tortor. Quisque ac leo rutrum, congue lectus vitae, rutrum nibh. Donec faucibus elit eu iaculis blandit.
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
