<template>
  <div>
    <main class="main">
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
@import '~/assets/_style';

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

.main {
  @extend %grid;
  padding-bottom: $footer-height;
  display: flex; // IE fix
}

.page {
  @extend %text;
  padding: $leading 0;
  margin-left: auto;
  margin-right: auto;
}

.text { @extend %text; }

.w100 { width: 100%; }

.sticky {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
}

// Typography
html { line-height: $line-height; }
h1 {
  font-size: 2rem;
  line-height: $line-height_title;
  margin-bottom: 2 * $leading;

  @media only screen and (max-width: 1000px) { font-size: 1.8rem; }
  @media only screen and (max-width: 600px) { font-size: 1.3rem; }
}

h1,
h2,
h3,
h4,
p,
ul,
ol,
img,
dl,
.leading {
  margin-bottom: $leading;
}

p + h3 {
  margin-top: 3 * $leading / 2;
}

p {
  hyphens: auto;
}

*:last-child {
  margin-bottom: 0;
}
</style>
