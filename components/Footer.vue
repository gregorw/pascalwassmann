<template>
  <footer class="navigation">
    <div class="content">
      <nav class="text">
        <ol>
          <li v-for="(item, index) in items" :key="item.link" class="inline">
            <!-- eslint-disable vue/singleline-html-element-content-newline -->
            <nuxt-link :to="item.link" class="underline bold">{{ item.text }}</nuxt-link><template v-if="index < items.length - 1">,&ensp;</template>
            <!-- eslint-enable vue/singleline-html-element-content-newline -->
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
      items: [{
        text: 'Pascal Wassmann',
        link: '/'
      },
      {
        text: 'Information',
        link: '/info'
      }]
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/_settings'
@import '~/assets/_placeholders'

.inline
  display: inline-block

.bold
  font-weight: bold

.underline
  @extend %fine-underline

footer.navigation
  @extend %grid

  .content
    @extend %text
    @extend %center
    padding-top: $footer-padding-top
    padding-bottom: $footer-padding-bottom
</style>
