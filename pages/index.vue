<template>
  <section class="container">
    <Projects :projects="projects" />
    <div>
      <h1>Pascal Wassmann</h1>
      <h2>Architekten GmbH</h2>
      <address>
        <span class="letter">T</span> <a href="tel:+41 43 534 18 18">+41 43 534 18 18</a><br>
        <span class="letter">M</span> <a href="tel:+41 76 482 27 32">+41 76 482 27 32</a><br>
        <a href="mailto:info@pascalwassmann.ch">info@pascalwassmann.ch</a><br>
        Schaffhauserstrasse 272<br>
        8057 Zürich
      </address>
    </div>
  </section>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 1.2;
}

.letter {
  display: inline-block;
  width: 1em;
}

address {
  font-style: normal;
  font-variant-numeric: tabular-nums;
  margin-left: 7.9rem;
  margin-top: 4rem;

  a {
    text-decoration: none;
    color: inherit;
  }
}

h1,
h2 {
  font-weight: bold;
}
</style>

<script>
import Projects from '../components/Projects'
import { createClient } from '../plugins/contentful'

const contentfulClient = createClient()

export default {
  components: {
    Projects
  },
  asyncData ({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      contentfulClient.getEntries({
        'content_type': 'project'
      })
    ]).then(([projects]) => {
      // return data that should be available
      // in the template
      return {
        projects: projects.items
      }
    }).catch(console.error)
  }
}
</script>
