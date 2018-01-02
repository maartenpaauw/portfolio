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
      ...mapGetters('resume', {
        _interests: 'interests'
      }),
      interests () {
        return this._interests.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
    },
    methods: {
      icon (name) {
        return {
          'apple': 'fa-apple',
          'bella-and-sarah': 'fa-paw',
          'films-and-series': 'fa-film',
          'games': 'fa-gamepad',
          'gitaar-spelen': 'skill skill-gitaar-spelen',
          'home-assistant': 'skill skill-home-assistant',
          'koffie': 'fa-coffee',
          'muziek': 'fa-music',
          'programmeren': 'fa-code',
          'reizen': 'fa-plane'
        }[slugify(name.toLowerCase())]
      }
    }
  }
</script>
