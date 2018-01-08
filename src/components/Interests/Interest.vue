<template lang="pug">
  interest-icon(:icon="icon",
                :title="title",
                :class="primary.color")
</template>

<script>
  import { mapGetters } from 'vuex'

  import Icon from '@/components/Helpers/Icon'

  export default {
    name: 'interests-interest',
    components: {
      interestIcon: Icon
    },
    props: {
      interest: {
        required: true,
        type: Object
      },
      icon: {
        required: true,
        type: Array
      }
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      title () {
        return this.interest.name
      }
    }
  }
</script>
