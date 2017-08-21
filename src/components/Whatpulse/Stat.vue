<template lang="pug">
  .col
    h1.midnight-blue
      vue-count-up(:end="count",
                   :options="options")
    span.small.silver.text-uppercase(v-html="helper")
</template>

<script>
  import _ from 'lodash'

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
          const username = 'maartenpaauw'
          const date = new Date()
          const start = Math.floor(date.setHours(0, 0, 0, 0) / 1000)
          const end = Math.floor(date.setHours(23, 59, 59, 999) / 1000)
          const response = await this.$http.get(`http://api.whatpulse.org/pulses.php?user=${username}&start=${start}&end=${end}&format=json`)
          this.count = 0
          _.forEach(response.data, (pulse) => {
            this.count += +pulse[_.upperFirst(this.type)]
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
