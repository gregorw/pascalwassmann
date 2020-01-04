<template>
  <div class="page">
    <Back />
    <h1>{{ name }}</h1>
    <dl>
      <Definition term="Verfahren" :text="proceeding_and_rank" />
      <Definition term="Bauingenieur" :text="bauingenieur" />
      <Definition term="Landschaftsarchitekt" :text="landschaftsarchitekt" />
      <Definition term="Statik" :text="statik" />
      <Definition term="Gebäudetechnik" :text="gebaudetechnik" />
      <Definition term="Bauphysik" :text="bauphysik" />
      <Definition term="Zusammenarbeit" :text="zusammenarbeit" />
      <Definition term="Auftrageber" :text="auftraggeber" />
      <Definition term="Datum" :text="datum" />
    </dl>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
    <div v-html="fulltext" />
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful'
import ResponsiveImage from '~/components/ResponsiveImage'
import Back from '~/components/Back'
import Definition from '~/components/Definition'

const contentfulClient = createClient()

export default {
  components: {
    ResponsiveImage,
    Back,
    Definition
  },
  asyncData ({ env, params }) {
    return contentfulClient.getEntries({
      'content_type': 'project',
      'fields.slug': params.id
    }).then((response) => {
      return response.items[0].fields
    })
  },
  computed: {
    fulltext () {
      return documentToHtmlString(this.richText)
    },
    proceeding_and_rank () {
      return `${this.verfahren}, ${this.preis}`
    }
  }
}
</script>
