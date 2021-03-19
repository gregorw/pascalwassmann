<template>
  <div class="page">
    <Back />
    <h1>{{ title }}</h1>
    <RichTextRenderer :document="body" />
  </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer'
import createClient from '~/plugins/contentful'
import Back from '~/components/Back'

const contentfulClient = createClient()

export default {
  name: 'Page',
  components: {
    Back,
    RichTextRenderer
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'page',
      'fields.slug': params.id
    }).then((response) => {
      const page = response.items[0]
      return page.fields
    })
  }
}
</script>
