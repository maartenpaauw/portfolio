<template lang="pug">
  keyword-icon(:icon="icon",
               :title="title",
               :class="primary.color")
</template>

<script>
  import { mapGetters } from 'vuex'

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
      ...mapGetters('theme', [
        'primary'
      ]),
      icon () {
        return ['skill', `skill-${slugify(this.keyword).toLowerCase()}`]
      },
      title () {
        return this.keyword
      }
    }
  }
</script>
