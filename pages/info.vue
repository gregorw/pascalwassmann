<template>
  <div class="page-component">
    <a @click="$router.go(-1)">Go back to overview</a>
    <h1>{{ info.fields.title }}</h1>
    <div v-html="content" />
  </div>
</template>

<script>
import { createClient } from '../plugins/contentful'
const md = require('markdown-it')({ breaks: true })
const contentfulClient = createClient()

export default {
  name: 'Info',
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'info'
    }).then((response) => {
      const info = response.items[0]
      return {
        info,
        content: md.render(info.fields.content)
      }
    })
  },
  computed: {
    content: () => {
      return md.render(this.info.fields.content)
    }
  }
}
</script>
