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
@import '~/assets/fonts';
@import '~/assets/_settings';
@import '~/assets/_placeholders';
@import '~/assets/_utilities';

html {
  font-family: 'Messina Sans', -apple-system, sans-serif;
  font-size: percentage(20 / 16);
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) { font-size: percentage(18 / 16); }
  @media only screen and (max-width: 600px) { font-size: percentage(16 / 16); }
}

main { padding-bottom: $footer-height; }

.page { padding: $leading 0; }

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
  font-size: 1rem;
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

// Typography
html { line-height: $line-height; }
h1 { font-size: 2rem; margin-bottom: 2 * $leading; }

h1,
h2,
h3,
h4,
p,
ul,
ol,
img,
dl {
  margin-bottom: $leading;
}

*:last-child {
  margin-bottom: 0;
}
</style>
