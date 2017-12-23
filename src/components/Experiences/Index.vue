<template lang="pug">
  .row.mb-5
    .col-2
      strong.text-uppercase.midnight-blue(v-html="title")
    .col
      transition-group.row(tag="div",
                           enter-active-class="animated fadeIn",
                           leave-active-class="animated fadeOut")
        .col-12(v-for="(experience, index) in experiences",
                :key="index",
                :class="classes(index)")
            experience(:experience="experience")
</template>

<script>
  import Experience from '@/components/Experiences/Experience'

  export default {
    name: 'portfolio-experiences',
    props: {
      title: {
        required: true,
        type: String
      },
      experiences: {
        required: true,
        type: Array
      }
    },
    components: {
      Experience: Experience
    },
    methods: {
      classes (index) {
        return this.experiences.length - 1 === index ? 'mb-0' : 'mb-5'
      }
    }
  }
</script>
