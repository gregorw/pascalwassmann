<template>
  <section>
    <Projects :projects="projects" />
  </section>
</template>

<style lang="scss">
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
    ]).then(([response]) => {
      // return data that should be available
      // in the template
      return {
        projects: response.items
      }
    })
  }
}
</script>
