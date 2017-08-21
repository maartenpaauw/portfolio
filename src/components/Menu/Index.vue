<template lang="pug">
  b-navbar.p-0(fixed="top",
               toggle-breakpoint="md",
               :variant="variant",
               :toggleable="true")

    .container
      b-nav-toggle(target="nav_collapse")

      b-link.navbar-brand.my-3(v-scroll-to="'#header'")
        span.text-uppercase.text-white.px-3.py-1(v-html="name")

      b-collapse#nav_collapse(is-nav="is-nav")
        b-nav.ml-auto(is-nav-bar="is-nav-bar")
          b-nav-item(v-for="(item, index) in items",
                     v-scroll-to="item.section",
                     :active="isActive(item)",
                     :key="index",
                     :class="classes(item)")
            span.text-white.text-uppercase(v-html="item.name")
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'portfolio-menu',
    props: {
      variant: {
        required: true,
        type: String
      }
    },
    computed: {
      ...mapGetters('menu', [
        'items',
        'active'
      ]),
      ...mapGetters('basics', [
        'name'
      ])
    },
    methods: {
      isActive (item) {
        return item === this.active
      },
      classes (item) {
        return {
          'mr-4': !(item === this.items[this.items.length - 1])
        }
      }
    }
  }
</script>

<style lang="scss">
  .navbar-brand {
    font-size: 1rem;
    border: solid white 2px;
  }
  
  .nav-link {
    padding-top: 1.5rem;
    padding-bottom: 1.25rem;

    &.active {
      border-bottom: solid 0.25rem white;
    }
  }
  
</style>
