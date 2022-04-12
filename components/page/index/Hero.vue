<template lang="pug">
.home-hero
  BaseHero
    BaseImage.img--gray-scale(:src="require('./assets/hero-background.png')")
    BaseLayer
    BaseText.home-hero__text.text--size-64.text--color-white(tag="h1") Brows Artist
    BaseButton.home-hero__button.button--center AGENDAR
</template>

<style lang="scss" scoped>
.home-hero {
  &__text {
    position: absolute;
    top: 100px;
    left: 10px;
    width: 5ch;
  }

  &__button{
    position: absolute;
    bottom: 100px;
  }
}
</style>
