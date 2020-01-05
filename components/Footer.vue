<template>
  <footer class="navigation">
    <div class="content">
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
@import '~/assets/settings'
@import '~/assets/utilities'

.inline
  display: inline-block

footer.navigation
  nav
    float: right

  .content
    @extend .grid
    @extend .top-line
    padding-top: $footer-padding-top
    padding-bottom: $footer-padding-bottom
</style>
