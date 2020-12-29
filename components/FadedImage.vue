<template>
  <img v-if="present" :src="url" :class="{'hidden': hide}">
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
  img
    max-width: 100%
    margin: 0 auto 2rem
    display: block
    max-height: 90vh
    min-height: 100px
    transition: opacity 1s

    &.hidden
      opacity: 0
</style>
