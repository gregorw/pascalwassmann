<template>
  <nuxt-link class="back" :to="'/'">
    <h1>←</h1>
  </nuxt-link>
</template>

<style lang="sass">
a.back
  text-align: right
  cursor: pointer
  float: right

  &:hover
    text-decoration: underline
</style>
