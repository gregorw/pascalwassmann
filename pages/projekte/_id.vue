<template>
  <div class="w100">
    <div class="page" id="top">
      <Back />
      <h1>{{ name }}</h1>
      <dl class="mb-0">
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
      <a href="#text">↓ Projektbeschrieb</a>
    </div>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
    <div class="page" id="text">
      <div v-html="renderedAbstract" class="leading" />
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
