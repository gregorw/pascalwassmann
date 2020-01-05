<template>
  <nuxt-link class="back" :to="'/'">
    ←
  </nuxt-link>
</template>

<style lang="sass">
@import '~/assets/settings'

a.back
  font-size: 2rem
  text-align: right
  cursor: pointer
  float: right
</style>
