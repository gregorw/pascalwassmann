<template>
  <nav class="projects">
    <ol role="menu">
      <li v-for="project in projects" :key="project.sys.id" @mouseover="activate(project)" @mouseleave="deactivate">
        <nuxt-link :to="'/projekte/' + project.fields.slug" role="menuitem" class="project-link" exact>
          <h1 class="no-margin">{{ project.fields.name }}</h1>
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
    line-height: $line-hight_title
    padding-top: $leading
    position: relative

  .background-image
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, calc(-50% + #{$footer-height} / 2))
    z-index: -1
</style>
