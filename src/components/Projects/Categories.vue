<template lang="pug">
  b-row
    b-col.text-center
      projects-category(v-for="(category, index) in categories",
                        :category="category",
                        :key="index")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Category from '@/components/Projects/Category'

  export default {
    name: 'projects-categories',
    computed: {
      ...mapGetters('projects', [
        'categories'
      ])
    },
    components: {
      projectsCategory: Category
    }
  }
</script>
