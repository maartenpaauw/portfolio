<template lang="pug">
  b-navbar.p-0.transition-800(fixed="top",
                              toggle-breakpoint="lg",
                              :variant="variant",
                              :toggleable="true")

    .container
      b-nav-toggle.ml-3(target="nav_collapse")

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
  nav {
    &.bg-transparent-white {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .navbar-brand {
      font-size: 1rem;
      border: solid white 2px;
    }

    .navbar-toggler {
      border-color: white !important;
      border-radius: 0;
      border-width: 2px;
      font-size: 1.1rem;

      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255,255,255)' stroke-width='2' stroke-linecap='square' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
      }
    }

    .nav-link {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;

      &.active {
        padding-bottom: 1.25rem;
        border-bottom: solid 0.25rem white;
      }
    }
  }
</style>
