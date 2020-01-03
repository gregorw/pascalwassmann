<template>
  <div class="page-component">
    <Back />
    <h1>{{ project.fields.name }}</h1>
    <dl>
      <dt>Verfahren</dt>
      <dd>{{ project.fields.verfahren }}</dd>
      <dt>Bauingenieur</dt>
      <dd>{{ project.fields.bauingenieur }}</dd>
      <dt>Landschaftsarchitekt</dt>
      <dd>{{ project.fields.landschaftsarchitekt }}</dd>
      <dt>Statik</dt>
      <dd>{{ project.fields.statik }}</dd>
      <dt>Gebäudetechnik</dt>
      <dd>{{ project.fields.gebaudetechnik }}</dd>
      <dt>Bauphysik</dt>
      <dd>{{ project.fields.bauphysik }}</dd>
      <dt>Zusammenarbeit</dt>
      <dd>{{ project.fields.zusammenarbeit }}</dd>
      <dt>Auftrageber</dt>
      <dd>{{ project.fields.auftraggeber }}</dd>
      <dt>Preis</dt>
      <dd>{{ project.fields.preis }}</dd>
    </dl>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
    <div v-html="fulltext" />
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '../../plugins/contentful'
import ResponsiveImage from '../../components/ResponsiveImage'
import Back from '../../components/Back'

const contentfulClient = createClient()

export default {
  components: {
    ResponsiveImage,
    Back
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
