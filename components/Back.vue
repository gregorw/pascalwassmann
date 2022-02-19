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

  &:hover
    text-decoration: underline
</style>

<script>
export default {
  name: 'Back',
  props: {
    text: {
      type: String, // We expect an array of pages that we need for our navigation
      default: '←' // ╳
    }
  }
}
</script>
