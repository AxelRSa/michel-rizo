<template lang="pug">
.header
  TheHeaderMobile.header__mobile
  TheHeaderDesktop.header__desktop
</template>

<style lang="scss" scoped>
.header {
  &__mobile {
    display: flex;
    @media (min-width: $responsive-md) {
      display: none;
    }
  }

  &__desktop {
    display: none;
    @media (min-width: $responsive-md) {
      display: flex;
    }
  }
}
</style>
