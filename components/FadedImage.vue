<template>
  <img v-if="present" :src="url" :class="{'faded': hide}">
</template>

<script>
export default {
  name: 'FadedImage',
  props: {
    image: {
      type: Object,
      required: true
    },
    hide: {
      type: Boolean,
      default: false
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
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/_settings'
@import '~/assets/_placeholders'

img
  display: block
  transition: opacity 2s
  object-fit: contain
  width: 80vw
  height: 80vh

  &.faded
    opacity: 0
</style>
