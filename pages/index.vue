<template>
  <section class="full-height">
    <Projects :projects="projects" class="flex-height" />
    <aside class="flash-n-jobs">
      <Flash v-for="flash in news" :key="flash.id" :flash="flash" />
      <Job v-for="job in jobs" :key="job.id" :job="job" />
    </aside>
  </section>
</template>

<script>
import Projects from '~/components/Projects'
import Job from '~/components/Job'
import Flash from '~/components/Flash'
import createClient from '~/plugins/contentful'

const contentful = createClient()

export default {
  components: {
    Projects,
    Job,
    Flash
  },
  asyncData ({ env }) {
    return Promise.all([
      contentful.getEntries({ 'content_type': 'project', 'order': '-fields.projektnummer' }),
      contentful.getEntries({ 'content_type': 'newsflash' }),
      contentful.getEntries({ 'content_type': 'job', 'order': 'fields.priority' })
    ]).then(([projects, news, jobs]) => {
      return {
        projects: projects.items,
        news: news.items,
        jobs: jobs.items
      }
    })
  }
}
</script>

<style lang="sass">
@import '~/assets/_settings'

.full-height
  display: flex
  flex-direction: column
  min-height: calc(100vh - #{$footer-height})

.flex-height
  flex: 1

</style>
