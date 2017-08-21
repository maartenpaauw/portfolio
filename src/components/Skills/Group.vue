<template lang="pug">
  .col-4
    .row
      .col-12
        strong.text-uppercase.midnight-blue(v-html="skill.name")
    .row
      .col-12.mt-2
        keyword(v-for="(keyword, index) in keywords",
                :keyword="keyword",
                :key="index")
</template>

<script>
  import Keyword from '@/components/Skills/Keyword'

  export default {
    name: 'skill-group',
    props: {
      skill: {
        required: true,
        type: Object
      }
    },
    components: {
      keyword: Keyword
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
