<template lang="pug">
  b-row.mb-5
    b-col(lg="2")
      p.text-uppercase.text-center.text-lg-left(:class="primary.color")
        strong(v-html="title")
    b-col.mt-4.d-lg-none(cols="12")
    b-col
      component.row(:tag="tag",
                    :is="is",
                    :enter-active-class="enterActiveClass",
                    :leave-active-class="leaveActiveClass")
        b-col(v-for="(experience, index) in experiences",
              cols="12",
              :key="index",
              :class="classes(index)")
            experience(:experience="experience")
</template>

<script>
  import { mapGetters } from 'vuex'

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
      },
      animated: {
        required: false,
        type: Boolean,
        default: true
      }
    },
    components: {
      Experience: Experience
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      tag () {
        return this.animated ? 'div' : null
      },
      is () {
        return this.animated ? 'transition-group' : 'div'
      },
      enterActiveClass () {
        return this.animated ? 'animated fadeIn' : null
      },
      leaveActiveClass () {
        return this.animated ? 'animated fadeOut' : null
      }
    },
    methods: {
      classes (index) {
        return this.experiences.length - 1 === index ? 'mb-0' : 'mb-5'
      }
    }
  }
</script>
