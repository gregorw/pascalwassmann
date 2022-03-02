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
  font-family: Times, Times New Roman, serif

  h1
    font-weight: lighter

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
