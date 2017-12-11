<template lang="pug">
  keyword-icon.wet-asphalt(:icon="icon",
                           :title="title")
</template>

<script>
  import slugify from 'slugify'

  import Icon from '@/components/Helpers/Icon'

  export default {
    name: 'skills-keyword',
    props: {
      keyword: {
        required: true,
        type: String
      }
    },
    components: {
      keywordIcon: Icon
    },
    computed: {
      icon () {
        return `skill skill-${slugify(this.keyword).toLowerCase()}`
      },
      title () {
        return this.keyword
      }
    }
  }
</script>
