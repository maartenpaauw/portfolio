<template lang="pug">
  section(:id="id")
    b-container(:fluid="true",
                :class="classes")
      b-container
        section-title(v-if="visible",
                      :color="_color",
                      :title="title",
                      :subtitle="subtitle")
        slot
</template>

<script>
  import { mapGetters } from 'vuex'

  import Title from '@/components/Helpers/Title'

  export default {
    name: 'portfolio-section',
    props: {
      id: {
        required: true,
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
      color: {
        required: false,
        type: String,
        default: null
      },
      backgroundColor: {
        required: false,
        type: String
      },
      padding: {
        required: false,
        default: 'py-5 px-3',
        type: String
      }
    },
    components: {
      sectionTitle: Title
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      classes () {
        return [
          this.padding,
          this.backgroundColor ? `bg-${this.backgroundColor}` : false
        ]
      },
      visible () {
        return this.title && this.subtitle
      },
      _color () {
        return this.color === null ? this.primary.color : this.color
      }
    }
  }
</script>
