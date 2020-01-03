<template>
  <div class="fullscreen">
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
@import '~/assets/fonts.css';

html {
  font-family: 'Messina Sans', -apple-system, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  display: flex;
}

.fullscreen {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: auto;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  font-size: 100%;
}
</style>
