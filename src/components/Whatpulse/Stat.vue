<template lang="pug">
  b-col
    h1(:class="primary.color")
      vue-count-up(:endVal="count",
                   :options="options")
    span.small.silver.text-uppercase(v-html="helper")
</template>

<script>
  import { mapGetters } from 'vuex'

  import _ from 'lodash'
  import axios from 'axios'
  import VueCountUp from 'vue-countup-v2'

  export default {
    name: 'whatpulse-stat',
    props: {
      type: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        count: 0,
        interval: null,
        options: {
          separator: '.'
        }
      }
    },
    components: {
      vueCountUp: VueCountUp
    },
    computed: {
      ...mapGetters('theme', [
        'primary'
      ]),
      helper () {
        return `${this.type === 'keys' ? 'toetsaanslagen' : 'muisklikken'} vandaag`
      }
    },
    methods: {
      async fetchData () {
        try {
          const username = 'maartenpaauw'
          const start = this.$moment().startOf('day').unix()
          const end = this.$moment().unix()
          const response = await axios.get(`http://api.whatpulse.org/pulses.php?user=${username}&start=${start}&end=${end}&format=json`)
          this.count = 0
          if (!response.data.error) {
            Object.values(response.data).forEach((pulse) => {
              this.count += +pulse[_.upperFirst(this.type)]
            })
          }
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
      clearInterval(this.interval)
    }
  }
</script>
