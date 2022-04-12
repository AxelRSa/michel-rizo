<template lang="pug">
component.button(:is="tag", v-bind="$attrs", v-on="$listeners")
  slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: var(--primary);

  &--white {
    color: var(--white);
  }

  &--link {
    padding: 10px;
    background-color: initial;
  }

  &--center {
    left: 50%;
    transform: translateX(-50%);
  }

  &--full-width {
    width: 100%;
  }

  &--letter-spacing {
    letter-spacing: 1px;
  }
}
</style>
