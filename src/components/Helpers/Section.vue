<template lang="pug">
  section(:id="id")
    b-container(:fluid="true",
                :class="classes")
      b-container
        section-title(v-if="visible",
                      :color="color",
                      :title="title",
                      :subtitle="subtitle")
        slot
</template>

<script>
  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-section',
    props: {
      id: {
        required: true,
        type: String
      },
      backgroundColor: {
        required: false,
        type: String
      },
      color: {
        required: false,
        type: String,
        default: 'midnight-blue'
      },
      title: {
        required: false,
        type: String
      },
      subtitle: {
        required: false,
        type: String
      }
    },
    components: {
      sectionTitle: Title
    },
    computed: {
      classes () {
        return [
          'py-5',
          'px-3',
          this.backgroundColor ? `bg-${this.backgroundColor}` : false
        ]
      },
      visible () {
        return this.title && this.subtitle
      }
    }
  }
</script>
