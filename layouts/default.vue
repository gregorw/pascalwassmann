<template>
  <div>
    <main class="grid">
      <nuxt />
    </main>
    <Footer class="sticky" />
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

  @media only screen and (max-width: 1000px) { font-size: 14px; }
  @media only screen and (max-width: 600px) { font-size: 12px; }
}

main {
  padding-bottom: 5rem;
}

.grid {
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  width: 60rem;
}

.sticky {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
}

// Resets
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
