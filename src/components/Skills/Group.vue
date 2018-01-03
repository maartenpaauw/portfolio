<template lang="pug">
  b-col(cols="12")
    b-row
      b-col(lg="2")
        p.text-uppercase.midnight-blue.text-center.text-lg-left
          strong(v-html="skill.name")
      b-col.mt-4.d-lg-none(cols="12")
      b-col(lg="10")
        b-row.mt-3.mb-4.justify-content-center.justify-content-lg-start
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
