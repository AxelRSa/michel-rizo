<template lang="pug">
.hero
  .image-container
    img.image(src='@/components/home/assets/hero-background.jpg')
    .mask
</template>
<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 480px;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.5);
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0007;
}
</style>
