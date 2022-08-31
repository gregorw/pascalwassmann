<template>
  <nav class="projects page">
    <ol role="menu">
      <li v-for="project in projects" :key="project.sys.id" @mouseover="activate(project)" @mouseleave="deactivate">
        <nuxt-link :to="'/projekte/' + project.fields.slug" role="menuitem" class="project-link" exact>
          <h1 class="no-margin">
            {{ project.fields.name }}
          </h1>
        </nuxt-link>
        <FadedImage :image="project.fields.images[0]" :hide="activeProject != project" class="background-image" />
      </li>
    </ol>
  </nav>
</template>

<script>
import FadedImage from '~/components/FadedImage'

export default {
  name: 'Projects',
  components: {
    FadedImage
  },
  props: {
    projects: {
      type: Array, // We expect an array of pages that we need for our navigation
      required: true
    }
  },
  data () {
    return {
      activeProject: this.projects[0],
      interval: null
    }
  },
  computed: {
    activeIndex () {
      return this.projects.indexOf(this.activeProject)
    },
    nextIndex () {
      return (this.activeIndex + 1) % this.projects.length
    },
    nextProject () {
      return this.projects[this.nextIndex]
    }
  },
  mounted () {
    this.startSlidesow()
  },
  methods: {
    activate (project) {
      this.stopSlideshow()
      this.activeProject = project
    },
    deactivate () {
      this.startSlidesow()
    },
    startSlidesow () {
      this.interval = setInterval(() => {
        this.activeProject = this.nextProject
      }, 4000)
    },
    stopSlideshow () {
      clearInterval(this.interval)
    }
  }
}
</script>

<style lang="sass">
  @import '~/assets/_settings'

  .no-margin
    margin-bottom: 0

  .project-link
    display: block

  nav.projects
    line-height: $line-height_title
    padding-top: $leading

  .background-image
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, calc(-50% + #{$footer-height} / 2))
    z-index: -1

  h1
    .text-bg-white &
      background-color: white
      display: inline-block

    .text-bg-white-gap &
      background-color: white
      display: inline-block
      margin-bottom: 2px

    .text-bg-transparent &
      background-color: rgba(white, 0.7)
      display: inline-block

    .text-bg-blur &
      background-color: rgba(white, 0.5)
      backdrop-filter: blur(3px)
      display: inline-block

    .text-shadow-white &
      text-shadow: 0 0 15px white

    .text-shadow-double-white &
      text-shadow: 0 0 15px white, 0 0 10px white

  .project-link:visited
    .visited-transparent & h1
      background-color: yellow

    .visited-strike & h1
      -webkit-text-stroke: 1px black
      text-stroke: 1px black
      -webkit-text-fill-color: transparent
      text-fill-color: transparent
      background-color: cyan

      // Doesn’t work either
      &::before
        content: ''
        display: block
        width: 5em
        height: .1em
        background-color: black
</style>
