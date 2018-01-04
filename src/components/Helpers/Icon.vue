<template lang="pug">
  b-col.text-center(cols="6",
                    lg="2",
                    md="3")
    font-awesome-icon(v-if="isFontAwesome",
                      :icon="icon",
                      size="2x")
    i.fa-2x.transition-400(v-else,
                           :class="icon")
    p.concrete.mt-2.mb-5.text-uppercase.small(v-html="title")
</template>

<script>
  export default {
    name: 'portfolio-icon',
    props: {
      title: {
        required: true,
        type: String
      },
      icon: {
        required: true,
        type: Array
      }
    },
    computed: {
      isFontAwesome () {
        return this.icon[0] !== 'skill'
      }
    }
  }
</script>
