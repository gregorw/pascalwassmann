<template>
  <div class="w100">
    <div id="top" class="page">
      <Back />
      <h1>{{ name }}</h1>
      <dl class="mb-0">
        <Definition term="Verfahren" :text="proceeding_and_rank" />
        <Definition term="Zusammenarbeit" :text="zusammenarbeit" />
        <Definition term="Landschaftsarchitektur" :text="landschaftsarchitektur" />
        <Definition term="Statik" :text="bauingenieur" />
        <Definition term="Holzbau" :text="holzbau" />
        <Definition term="Gebäudetechnik" :text="gebudetechnik" />
        <Definition term="Bauphysik" :text="bauphysik" />
        <Definition term="Brandschutz" :text="brandschutz" />
        <Definition term="Visualisierung" :text="rendering" />
        <Definition term="Fotografie" :text="fotografie" />
        <Definition term="Auftraggeber" :text="auftraggeber" />
        <Definition term="Datum" :text="datum" />
      </dl>
      <a href="#text">↓ Projektbeschrieb</a>
    </div>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
    <div id="text" class="page">
      <div class="leading" v-html="renderedAbstract" />
      <p>
        <a href="#top">↑ Nach oben</a>
      </p>
    </div>
  </div>
</template>

<style lang="sass">
.mb-0
  margin-bottom: 0
</style>

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
