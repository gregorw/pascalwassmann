<template>
  <div class="page">
    <Back />
    <h1>{{ project.name }}</h1>
    <a @click="showDetails=true">Projektbeschrieb ➔</a>
    <ProjectDetails :project="project" :show="showDetails" />
    <Slideshow :images="project.images" />
  </div>
</template>

<script>
import createClient from '~/plugins/contentful'
import ProjectDetails from '~/components/ProjectDetails'
import Slideshow from '~/components/Slideshow'
import Back from '~/components/Back'

const contentfulClient = createClient()

export default {
  components: {
    Back,
    ProjectDetails,
    Slideshow
  },
  asyncData ({ _, params }) {
    return contentfulClient.getEntries({
      'content_type': 'project',
      'fields.slug': params.id
    }).then((response) => {
      return { project: response.items[0].fields }
    })
  },
  data () {
    return {
      project: { images: [] },
      showDetails: false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
