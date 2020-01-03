<template>
  <div class="page-component">
    <a @click="$router.go(-1)">Go back to overview</a>
    <h1>{{ project.fields.name }}</h1>
    <ContentfulImage v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import { createClient } from '../../plugins/contentful'
import ContentfulImage from '../../components/ContentfulImage'

const contentfulClient = createClient()

export default {
  components: {
    ContentfulImage
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
