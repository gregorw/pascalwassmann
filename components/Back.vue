<template>
  <nuxt-link class="back" :to="'/'">
    <h1>{{ text }}</h1>
  </nuxt-link>
</template>

<style lang="sass">
a.back
  text-align: right
  cursor: pointer
  float: right
  padding-left: .5rem

  h1
    font-size: 2.5rem
    line-height: 2rem * 1.15

  &:hover
    text-decoration: none
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
