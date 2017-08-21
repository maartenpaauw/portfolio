import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('menu', [
      'items'
    ])
  },
  methods: {
    ...mapActions('menu', [
      'active'
    ]),
    setActive (isVisible, entry) {
      if (isVisible) {
        this.active(this.items.indexOf(
          this.items.find((item) => {
            return item.section === `#${this.id}`
          })
        ))
      }
    }
  }
}
