<template>
  <div class="fullscreen">
    <main class="grid">
      <nuxt />
    </main>
    <Footer class="grid" />
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
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;

  main {
    flex: auto;
  }
}

.grid {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  width: 60rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  font-size: 100%;
}

ol,
ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: black;
}

</style>
