<template>
  <section>
    <Projects :projects="projects" />
    <Flash v-for="flash in news" :key="flash.id" :flash="flash" />
    <Job v-for="job in jobs" :key="job.id" :job="job" />
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
import Projects from '~/components/Projects'
import Job from '~/components/Job'
import Flash from '~/components/Flash'
import { createClient } from '~/plugins/contentful'

const contentful = createClient()

export default {
  components: {
    Projects,
    Job,
    Flash
  },
  asyncData ({ env }) {
    return Promise.all([
      // fetch all blog posts sorted by creation date
      contentful.getEntries({ 'content_type': 'project' }),
      contentful.getEntries({ 'content_type': 'newsflash' }),
      contentful.getEntries({ 'content_type': 'job' })
    ]).then(([projects, news, jobs]) => {
      // return data that should be available
      // in the template
      return {
        projects: projects.items,
        news: news.items,
        jobs: jobs.items
      }
    })
  }
}
</script>
