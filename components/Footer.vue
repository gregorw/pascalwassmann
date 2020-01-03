<template>
  <footer class="navigation">
    <nuxt-link to="/">
      {{ brand }}
    </nuxt-link>
    <nav>
      <ol>
        <li v-for="item in items" :key="item.link">
          <nuxt-link :to="item.link">
            {{ item.text }}
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
      brand: 'Pascal Wassmann',
      items: [{
        text: 'Info',
        link: '/info'
      }]
    }
  }
}
</script>

<style lang="sass">
nav,
li
  display: inline-block

nav
  float: right

footer.navigation
  padding: 1rem 0
</style>
