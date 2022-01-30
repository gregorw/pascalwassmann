<template>
  <div>
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
    <div class="images">
      <ResponsiveImage v-for="image in project.images" :key="image.id" :image="image" />
    </div>
    <div v-html="renderedAbstract" />
  </div>
</template>

<script>
import markdown from '~/custom/markdown'
import ResponsiveImage from '~/components/ResponsiveImage'
import Definition from '~/components/Definition'

export default {
  components: {
    ResponsiveImage,
    Definition
  },
  props: {
    project: { type: Object, required: true }
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
.images
  overflow-x: auto
  display: flex
  align-items: center
  scroll-snap-type: x mandatory
  white-space: nowrap
  position: fixed
  top: 100px
  scroll-padding: 50%
  left: 0
  width: 100vw
  height: 80vh
  padding: 0 5rem

  img:last-child
    padding-right: 20vw
</style>
