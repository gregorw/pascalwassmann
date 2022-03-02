<template>
  <img v-if="present" :key="image.id" :data-srcset="srcset" :data-src="url" class="lazy">
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
  data () {
    return {
      sizes: [600, 1200, 1800, 2400]
    }
  },
  computed: {
    present () {
      return this.image.fields !== undefined
    },
    url () {
      return `${this.secure_url}?fm=jpg&fl=progressive`
    },
    secure_url () {
      return `https:${this.image.fields.file.url}`
    },
    srcset () {
      return this.sizes.map((size) => {
        return `${this.url}&w=${size} ${size}w`
      }).join(', ')
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
  display: block
  opacity: 0
  max-width: 80vw
  max-height: 90vh
  min-height: 100px
  margin: 0 auto 3rem

  @media (max-width: 50rem)
    max-width: calc(100vw - 2rem)

  &:not(.initial)
    transition: opacity 1s

  &:not([src])
    visibility: hidden

  &.initial,
  &.loaded,
  &.error
    opacity: 1
</style>
