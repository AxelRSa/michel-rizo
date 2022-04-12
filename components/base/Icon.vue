<template lang="pug">
svg.icon(
  xmlns='http://www.w3.org/2000/svg',
  viewBox='0 0 18 18',
  :aria-labelledby='iconName',
  role='presentation'
)
  title(:id='iconName', lang='es') {{ iconName }}
  g
    slot
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
  height: 24px;
  width: 24px;
}
</style>
