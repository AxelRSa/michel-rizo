<template lang="pug">
.navbar
  a.navbar__link(href='#') trabajos
  a.navbar__link(href='#') servicios
  nuxt-link.navbar__link-logo(to='/'): IconMichelleLogo.navbar__logo
  a.navbar__link(href='#') ubicación
  .social-media
    a.social-media__link(
      href='#',
      style='--social-media-color: var(--color-instagram)'
    ): IconInstagram.social-media__icon
    a.social-media__link(
      href='#',
      style='--social-media-color: var(--color-whatsapp)'
    ): IconWhatsapp.social-media__icon
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--header);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    color: #ccc;
    font-size: 18px;
    font-variant: small-caps;
    letter-spacing: 3px;
    transition: color 0.3s;
  }

  &__link-logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: auto;
    padding: 10px;
    color: #fff;
  }

  &__link::after,
  &__link-logo::after {
    position: absolute;
    z-index: -1;
    width: 0;
    height: 0;
    background-color: #111b;
    border-radius: 50px;
    transition: width 0.2s, height 0.2s;
    content: '';
  }

  &__link:hover,
  &__link-logo:hover {
    color: #fff;

    &::after {
      width: 100%;
      height: 100%;
    }
  }

  &__logo {
    width: 100%;
    height: auto;
  }
}

.social-media {
  display: flex;
  gap: 10px;
  padding: 0 10px;

  &__link {
    padding: 5px;
    color: #ccc;
    transition: color 0.3s;
  }

  &__link:hover {
    color: var(--social-media-color);
  }

  &__icon {
    width: 30px;
    height: 30px;
  }
}
</style>
