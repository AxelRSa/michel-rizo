<template lang="pug">
component.text(:is="tag", v-bind="$attrs", v-on="$listeners")
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-size: var(--font-size-16);
  &--size-32 {
    font-size: var(--font-size-32);
  }
  &--size-64 {
    font-size: var(--font-size-64);
  }
  &--color-white {
    color: var(--white);
  }
}
</style>
