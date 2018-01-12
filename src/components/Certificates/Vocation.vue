<template lang="pug">
  span
    experiences(:title="vocation.issuingAuthority",
                :experiences="visible",
                :animated="false")
    b-row.my-5(v-if="show")
      b-col(lg="10",
            offset-lg="2")
        b-row
          b-col.text-center(lg="8")
            b-pagination(size='sm',
                         align="center",
                         v-model="current",
                         :total-rows='totalRows',
                         :per-page='perPage',
                         :hide-goto-end-buttons="hideGotoEndButtons",
                         aria-label="Paginering",
                         label-first-page="Ga naar de eerste pagina",
                         label-prev-page="Ga naar de vorige pagina",
                         label-next-page="Ga naar de volgende pagina",
                         label-last-page="Ga naar de laatste pagina",
                         label-page="Ga naar pagina")
</template>

<script>
  import Experiences from '@/components/Experiences/Index'

  export default {
    name: 'certificates-vocation',
    props: {
      vocation: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        current: 1,
        perPage: 2
      }
    },
    components: {
      experiences: Experiences
    },
    computed: {
      show () {
        return this.vocation.accreditations.length > this.perPage
      },
      totalRows () {
        return this.vocation.accreditations.length
      },
      visible () {
        const begin = (this.current - 1) * this.perPage
        const end = begin + this.perPage
        return this.vocation.accreditations.slice(begin, end)
      },
      hideGotoEndButtons () {
        return this.vocation.accreditations.length <= this.perPage * 2
      }
    }
  }
</script>

<style lang="scss">
  .page-item {
    &.active {
      .page-link {
        background-color: #2c3e50 !important;
        border-color: #2c3e50 !important;
      }
    }

    &:not(.disabled):not(.active) {
      .page-link {
        color: #2c3e50 !important;
      }
    }
  }
</style>
