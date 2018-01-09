<template lang="pug">
  interests-section(id="interests",
                    background-color="clouds",
                    title="Interesses",
                    subtitle="Zo vul ik het liefst mijn dag")
    b-row(align-h="center")
      interest(v-for="(interest, index) in interests",
               :key="index",
               :interest="interest",
               :icon="icon(interest.name)")
</template>

<script>
  import { mapGetters } from 'vuex'
  import slugify from 'slugify'

  import Section from '@/components/Helpers/Section'
  import Interest from '@/components/Interests/Interest'

  export default {
    name: 'portfolio-interests',
    components: {
      interestsSection: Section,
      interest: Interest
    },
    computed: {
      ...mapGetters('resume', [
        'interests'
      ])
    },
    methods: {
      icon (name) {
        return {
          'apple': ['fab', 'apple'],
          'bella-and-sarah': ['fas', 'paw'],
          'films-and-series': ['fas', 'film'],
          'games': ['fas', 'gamepad'],
          'gitaar-spelen': ['skill', 'skill-gitaar-spelen'],
          'home-assistant': ['skill', 'skill-home-assistant'],
          'koffie': ['fas', 'coffee'],
          'muziek': ['fas', 'music'],
          'programmeren': ['fas', 'code'],
          'reizen': ['fas', 'plane']
        }[slugify(name.toLowerCase())]
      }
    }
  }
</script>
