<template lang="pug">
  b-col(cols="12")
    b-row
      b-col(cols="2")
        strong.text-uppercase.midnight-blue(v-html="skill.name")
      b-col(cols="10")
        b-row.mt-3.mb-4
          skills-keyword(v-for="(keyword, index) in keywords",
                         :keyword="keyword",
                         :key="index")
</template>

<script>
  import Keyword from '@/components/Skills/Keyword'

  export default {
    name: 'skills-group',
    props: {
      skill: {
        required: true,
        type: Object
      }
    },
    components: {
      skillsKeyword: Keyword
    },
    computed: {
      keywords () {
        return this.skill.keywords.sort((a, b) => {
          return a.localeCompare(b)
        })
      }
    }
  }
</script>
