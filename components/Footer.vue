<template>
  <footer class="navigation">
    <div class="grid">
      <nuxt-link to="/">
        {{ brand }}
      </nuxt-link>
      <nav>
        <ol>
          <li v-for="item in items" :key="item.link" class="inline">
            <nuxt-link :to="item.link">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ol>
      </nav>
    </div>
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
@import '~/assets/settings.scss'

.inline
  display: inline-block

footer.navigation
  padding: $leading 0

  nav
    float: right
</style>
