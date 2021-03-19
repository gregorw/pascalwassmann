<template>
  <div class="page">
    <Back />
    <h1>{{ job.fields.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="fulltext" />
  </div>
</template>

<script>
import createClient from '~/plugins/contentful'
import Back from '~/components/Back'
import markdown from '~/custom/markdown'

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
      return markdown(this.job.fields.profile)
    }
  }
}
</script>
