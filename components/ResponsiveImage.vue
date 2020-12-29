<template>
  <img v-if="present" :key="image.id" :data-src="url" class="lazy">
</template>

<script>
import LazyLoad from 'vanilla-lazyload'

export default {
  name: 'ResponsiveImage',
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    present () {
      return this.image.fields !== undefined
    },
    url () {
      return `${this.secure_url}?fm=jpg&fl=progressive&w=1500`
    },
    secure_url () {
      return `https:${this.image.fields.file.url}`
    }
  },
  mounted () {
    document.lazyLoad = new LazyLoad({
      elements_selector: '.lazy',
      use_native: true
    })
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/_settings'
@import '~/assets/_placeholders'

img
  @extend %image-size
  opacity: 0

  &:not(.initial)
    transition: opacity 1s

  &:not([src])
    visibility: hidden

  &.initial,
  &.loaded,
  &.error
    opacity: 1
</style>
