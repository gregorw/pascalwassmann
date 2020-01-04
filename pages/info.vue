<template>
  <div class="page-component">
    <Back />
    <h1>{{ info.fields.title }}</h1>
    <div v-html="renderedContent" />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
import Back from '~/components/Back'
import markdown from '~/custom/markdown'
const contentfulClient = createClient()

export default {
  name: 'Info',
  components: {
    Back
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'info'
    }).then((response) => {
      const info = response.items[0]
      return {
        info,
        renderedContent: markdown(info.fields.content)
      }
    })
  }
}
</script>
