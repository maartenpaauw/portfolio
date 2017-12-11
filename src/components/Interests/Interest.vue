<template lang="pug">
  interest-icon.midnight-blue(:icon="icon",
                              :title="title",
                              hover="animated tada",
                              "column"="col-2")
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
        type: String
      }
    },
    computed: {
      title () {
        return this.interest.name
      }
    }
  }
</script>
