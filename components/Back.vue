<template>
  <nuxt-link class="back" :to="'/'">
    <h1>← {{ text }}</h1>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: { type: String, default: '' }
  }
}
</script>

<style lang="sass">
a.back
  text-align: right
  cursor: pointer
  float: right
  padding-left: .5rem

  &:hover
    text-decoration: underline
</style>
