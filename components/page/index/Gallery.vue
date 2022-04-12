<template lang="pug">
BaseContainer.gallery
  BaseText.gallery__title.text--size-32(tag="h2") Galería
  client-only
    owl-carousel.carousel(
      ,
      :dots="false",
      :nav="false",
      :margin="40",
      :center="true",
      :lazyLoadEager="4",
      :responsive="{ 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 }, 1400: { items: 6 } }"
    )
      .carousel__image(v-for="item in [1, 2, 3, 4, 5, 6, 7]")
        img(src="./assets/hero-background.png")
  .gallery__button
    BaseButton.button--full-width.button--letter-spacing AGENDAR
</template>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
  &__button,
  &__title {
    padding: 0 40px;
  }
}
</style>
