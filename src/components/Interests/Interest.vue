<template lang="pug">
  interest-icon.midnight-blue(:icon="icon",
                              :title="title")
</template>

<script>
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
      title () {
        return this.interest.name
      }
    }
  }
</script>
