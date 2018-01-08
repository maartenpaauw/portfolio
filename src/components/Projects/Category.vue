<template lang="pug">
  small.text-uppercase.mr-2.transition-400(v-html="category",
                                           :class="classes",
                                           @click="setCategory(_index)")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'projects-category',
    props: {
      category: {
        required: true,
        type: String
      }
    },
    computed: {
      ...mapGetters('projects', [
        'index',
        'categories'
      ]),
      ...mapGetters('theme', [
        'primary'
      ]),
      active () {
        return this._index === this.index
      },
      _index () {
        return this.categories.indexOf(this.category)
      },
      classes () {
        return this.active ? this.primary.color : 'silver cursor-pointer'
      }
    },
    methods: {
      ...mapActions('projects', [
        'setCategory'
      ])
    }
  }
</script>
