<template lang="pug">
  .col
    h1.midnight-blue
      vue-count-up(:end="count",
                   :options="options")
    span.small.silver.text-uppercase(v-html="helper")
</template>

<script>
  import _ from 'lodash'
  import moment from 'moment'

  import VueCountUp from 'vue-countup-v2'

  export default {
    props: {
      type: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        interval: null,
        count: 0
      }
    },
    components: {
      vueCountUp: VueCountUp
    },
    computed: {
      helper () {
        return `${this.type === 'keys' ? 'toetsaanslagen' : 'muisklikken'} vandaag`
      },
      options () {
        return {
          separator: '.'
        }
      }
    },
    methods: {
      async fetchData () {
        try {
          const response = await this.$http.get('http://api.whatpulse.org/pulses.php?user=maartenpaauw&format=json')
          this.count = 0
          _.forEach(response.data, (pulse) => {
            if (moment(pulse.Timedate).isSame(new Date(), 'd')) {
              this.count += parseInt(pulse[_.upperFirst(this.type)])
            }
          })
        } catch (err) {}
      },
      createInterval () {
        this.interval = setInterval(() => {
          this.fetchData()
        }, 1000 * 60)
      }
    },
    created () {
      this.fetchData()
      this.createInterval()
    },
    beforeDestroy () {
      this.interval = null
    }
  }
</script>
