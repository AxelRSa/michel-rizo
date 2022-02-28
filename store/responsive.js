export const state = () => ({
  responsiveSize: '',
})

export const mutations = {
  handleResponsiveValue(state) {
    // to know how works matchMedia
    // https://www.w3schools.com/howto/howto_js_media_queries.asp

    // extra extra large
    const isXxl = window.matchMedia('(min-width: 1400px)').matches
    if (isXxl) return (state.responsiveSize = 'xxl')

    // extra large
    const isXl = window.matchMedia('(min-width: 1200px)').matches
    if (isXl) return (state.responsiveSize = 'xl')

    // large
    const isLg = window.matchMedia('(min-width: 992px)').matches
    if (isLg) return (state.responsiveSize = 'lg')

    // medium
    const isMd = window.matchMedia('(min-width: 768px)').matches
    if (isMd) return (state.responsiveSize = 'md')

    // small
    const isSm = window.matchMedia('(min-width: 576px)').matches
    if (isSm) return (state.responsiveSize = 'sm')

    // extra small
    return (state.responsiveSize = 'xs')
  },
}
