<template>
  <div class="page">
    <h1 class="toggle" @click="toggleDetails">
      {{ !showDetails ? 'Info' : '╳' }}
    </h1>
    <h1>
      {{ project.name }}
    </h1>
    <ProjectDetails :project="project" :show="showDetails" />
    <Slideshow :images="project.images" />
  </div>
</template>

<script>
import createClient from '~/plugins/contentful'
import ProjectDetails from '~/components/ProjectDetails'
import Slideshow from '~/components/Slideshow'

const contentfulClient = createClient()

export default {
  components: {
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
  },
  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  }
}
</script>

<style lang="sass" scoped>
.toggle
  cursor: pointer
  margin-bottom: 1rem
  float: right
  font-weight: normal
</style>
