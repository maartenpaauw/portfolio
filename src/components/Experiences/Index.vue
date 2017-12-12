<template lang="pug">
  .row.mb-5
    .col-2
      strong.text-uppercase.midnight-blue(v-html="title")
    .col
      .row
        .col-12(v-for="experience in experiences")
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
    }
  }
</script>
