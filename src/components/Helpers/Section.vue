<template lang="pug">
  section(:id="id")
    .container-fluid(:class="classes")
      .container(v-if="inContainer")
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
      },
      padding: {
        required: false,
        default: 'p-5',
        type: String
      }
    },
    components: {
      sectionTitle: Title
    },
    computed: {
      classes () {
        return [
          this.padding,
          this.backgroundColor ? `bg-${this.backgroundColor}` : false
        ]
      },
      visible () {
        return this.title && this.subtitle
      }
    }
  }
</script>
