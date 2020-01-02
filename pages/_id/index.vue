<template>
  <div class="page-component">
    <a @click="$router.go(-1)">Go back to overview</a>
    <h1>{{ project.fields.name }}</h1>
  </div>
</template>

<script>
import { createClient } from '../../plugins/contentful'
const contentfulClient = createClient()

export default {
  name: 'Index',
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'project',
      'fields.slug': params.id
    }).then((project) => {
      return {
        project: project.items[0]
      }
    })
  }
}
</script>
