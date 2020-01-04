<template>
  <div class="page-component">
    <Back />
    <h1>{{ project.fields.name }}</h1>
    <dl>
      <Definition term="Verfahren" :text="project.fields.verfahren" />
      <Definition term="Bauingenieur" :text="project.fields.bauingenieur" />
      <Definition term="Landschaftsarchitekt" :text="project.fields.landschaftsarchitekt" />
      <Definition term="Statik" :text="project.fields.statik" />
      <Definition term="Gebäudetechnik" :text="project.fields.gebaudetechnik" />
      <Definition term="Bauphysik" :text="project.fields.bauphysik" />
      <Definition term="Zusammenarbeit" :text="project.fields.zusammenarbeit" />
      <Definition term="Auftrageber" :text="project.fields.auftraggeber" />
      <Definition term="Preis" :text="project.fields.preis" />
      <Definition term="Datum" :text="project.fields.datum" />
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
      const project = response.items[0]
      const images = project.fields.images
      return {
        project,
        images
      }
    })
  },
  computed: {
    fulltext () {
      return documentToHtmlString(this.project.fields.richText)
    }
  }
}
</script>
