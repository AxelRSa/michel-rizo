<template lang="pug">
.header
  .header__menu(@click='menuActive = !menuActive'): iconMenu.header__icon
  .navbar(v-show='menuActive')
    .navbar__menu(@click='menuActive = !menuActive'): iconClose.navbar__menu-icon
    nuxt-link.navbar__link-logo(to='/'): IconMichelleLogo.navbar__logo
    a.navbar__link(href='#') trabajos
    a.navbar__link(href='#') servicios
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

<script>
export default {
  data() {
    return {
      menuActive: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: var(--header);
  justify-content: space-between;
  padding: 10px;

  &__menu {
    padding: 5px;
    background: #fff;
    border-radius: 5px;
  }

  &__icon {
    width: 30px;
    height: 30px;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--menu);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  color: #fff;
  background-color: #000;

  &__menu {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
  }

  &__menu-icon {
    width: 30px;
    height: 30px;
  }

  &__logo {
    width: 100%;
    height: 100%;
  }

  &__link-logo {
    width: 140px;
    height: auto;
  }

  &__link {
    padding: 5px;
    font-size: 32px;
    font-variant: small-caps;
    letter-spacing: 3px;
  }
}

.social-media {
  display: flex;
  gap: 5px;

  &__link {
    padding: 10px;
  }

  &__icon {
    width: 30px;
    height: 30px;
  }
}
</style>
