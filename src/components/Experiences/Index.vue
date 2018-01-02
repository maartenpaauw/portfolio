<template lang="pug">
  b-row.mb-5
    b-col(cols="2")
      strong.text-uppercase.midnight-blue(v-html="title")
    b-col
      transition-group.row(tag="div",
                           enter-active-class="animated fadeIn",
                           leave-active-class="animated fadeOut")
        b-col(v-for="(experience, index) in experiences",
              cols="12",
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
