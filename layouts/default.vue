<template lang="pug">
.app
  TheHeader
  Nuxt
  TheFooter
</template>
<script>
export default {
  mounted() {
    // handle responsive value
    this.handleResponsiveValue()
    window.addEventListener('resize', this.handleResponsiveValue)
  },
  methods: {
    // handle responsive value
    handleResponsiveValue() {
      this.$store.commit('responsive/handleResponsiveValue')
    },
  },
}
</script>
