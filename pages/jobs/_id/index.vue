<template>
  <div class="page-component">
    <Back />
    <h1>{{ job.fields.title }}</h1>
    <div v-html="fulltext" />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful'
import Back from '~/components/Back'
const md = require('markdown-it')({ breaks: true })

const contentful = createClient()

export default {
  components: {
    Back
  },
  asyncData ({ env, params }) {
    return contentful.getEntries({
      'content_type': 'job',
      'fields.slug': params.id
    }).then((response) => {
      return {
        job: response.items[0]
      }
    })
  },
  computed: {
    fulltext () {
      return md.render(this.job.fields.profile)
    }
  }
}
</script>
