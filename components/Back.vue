<template>
  <a class="back" @click="$router.go(-1)">←</a>
</template>

<style lang="sass">
a.back
  padding-top: 1rem
  padding-bottom: 1rem
  font-size: 2rem
  display: block
  cursor: pointer
</style>
