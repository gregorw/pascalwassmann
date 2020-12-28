<template>
  <div class="page">
    <Back />
    <h1>{{ title }}</h1>
    <div v-html="renderedContent" />
  </div>
</template>

<script>
import createClient from '~/plugins/contentful'
import Back from '~/components/Back'
import markdown from '~/custom/markdown'
const contentfulClient = createClient()

export default {
  name: 'Page',
  components: {
    Back
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug': params.id
    }).then((response) => {
      const page = response.items[0]
      return page.fields
    })
  },
  computed: {
    renderedContent () {
      return markdown(this.content)
    }
  }
}
</script>
