<template lang="pug">
img.img(v-bind="$attrs", v-on="$listeners")
</template>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  &--gray-scale {
    filter: grayscale(1);
  }
}
</style>
