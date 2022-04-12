<template lang="pug">
header.header
  LayoutHeaderMobile.header__mobile
  LayoutHeaderDesktop.header__desktop
</template>
<style lang="scss" scoped>
.header {
  padding: 10px;
  position: absolute;
  z-index: 10;
  width: 100%;

  &__mobile {
    display: flex;
    @media (min-width: $responsive-lg) {
      display: none;
    }
  }

  &__desktop {
    display: none;
    @media (min-width: $responsive-lg) {
      display: flex;
    }
  }
}
</style>
