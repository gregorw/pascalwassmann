<template>
  <footer>
    <span>{{ brand }}</span>
    <nav>
      <ol>
        <li>
          <nuxt-link to="/info">
            Info
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      brand: 'Pascal Wassmann'
    }
  }
}
</script>

<style lang="sass">
  footer
    display: block

  ol
    list-style-type: none
</style>
