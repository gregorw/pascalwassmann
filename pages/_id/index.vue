<template>
  <div class="page-component">
    <Back />
    <h1>{{ project.fields.name }}</h1>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import { createClient } from '../../plugins/contentful'
import ResponsiveImage from '../../components/ResponsiveImage'
import Back from '../../components/Back'

const contentfulClient = createClient()

export default {
  components: {
    ResponsiveImage,
    Back
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'project',
      'fields.slug': params.id
    }).then((response) => {
      const project = response.items[0]
      const images = project.fields.images
      return {
        project,
        images
      }
    })
  }
}
</script>
