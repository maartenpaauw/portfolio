<template lang="pug">
  section(:id="id")
    b-container(:fluid="true",
                :class="classes")
      b-container(v-if="inContainer")
        section-title(v-if="visible",
                      :title="title",
                      :subtitle="subtitle")
        slot
      template(v-else="")
        section-title(v-if="visible",
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
      title: {
        required: false,
        type: String
      },
      subtitle: {
        required: false,
        type: String
      },
      inContainer: {
        required: false,
        default: true,
        type: Boolean
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
