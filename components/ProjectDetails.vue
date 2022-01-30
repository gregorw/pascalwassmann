<template>
  <div v-if="show">
    <dl>
      <Definition term="Verfahren" :text="project.proceeding_and_rank" />
      <Definition term="Statik" :text="project.bauingenieur" />
      <Definition term="Landschaftsarchitektur" :text="project.landschaftsarchitektur" />
      <Definition term="Gebäudetechnik" :text="project.gebudetechnik" />
      <Definition term="Bauphysik" :text="project.bauphysik" />
      <Definition term="Rendering" :text="project.rendering" />
      <Definition term="Zusammenarbeit" :text="project.zusammenarbeit" />
      <Definition term="Auftraggeber" :text="project.auftraggeber" />
      <Definition term="Datum" :text="project.datum" />
    </dl>
    <div v-html="renderedAbstract" />
  </div>
</template>

<script>
import markdown from '~/custom/markdown'
import Definition from '~/components/Definition'

export default {
  components: {
    Definition
  },
  props: {
    project: { type: Object, required: true },
    show: { type: Boolean, default: false }
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
      return markdown(this.project.abstract)
    },
    proceeding_and_rank () {
      return `${this.project.verfahren}, ${this.project.preis}`
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
