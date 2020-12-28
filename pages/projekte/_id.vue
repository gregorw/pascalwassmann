<template>
  <div class="page">
    <Back />
    <h1>{{ name }}</h1>
    <dl>
      <Definition term="Verfahren" :text="proceeding_and_rank" />
      <Definition term="Statik" :text="bauingenieur" />
      <Definition term="Landschaftsarchitektur" :text="landschaftsarchitektur" />
      <Definition term="Gebäudetechnik" :text="gebudetechnik" />
      <Definition term="Bauphysik" :text="bauphysik" />
      <Definition term="Rendering" :text="rendering" />
      <Definition term="Zusammenarbeit" :text="zusammenarbeit" />
      <Definition term="Auftraggeber" :text="auftraggeber" />
      <Definition term="Datum" :text="datum" />
    </dl>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
    <div v-html="renderedAbstract" />
  </div>
</template>

<script>
import markdown from '~/custom/markdown'
import createClient from '~/plugins/contentful'
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
  data () {
    return {
      bauingenieur: '',
      landschaftsarchitektur: '',
      gebudetechnik: '',
      bauphysik: '',
      zusammenarbeit: '',
      auftraggeber: '',
      datum: ''
    }
  },
  computed: {
    renderedAbstract () {
      return markdown(this.abstract)
    },
    proceeding_and_rank () {
      return `${this.verfahren}, ${this.preis}`
    }
  }
}
</script>
