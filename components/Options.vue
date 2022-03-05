<template>
  <aside class="options">
    Options
  </aside>
</template>

<style lang="sass" scoped>
.options
  position: absolute
  right: 0
  top: 0
  bottom: 0
  width: 50px

  &:hover
    width: 20rem
    background: yellow
</style>

<script>
export default {
  name: 'Back',
  props: {
    text: {
      type: String, // We expect an array of pages that we need for our navigation
      default: '✕' // ╳ ←
    }
  }
}
</script>
