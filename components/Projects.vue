<template>
  <nav class="projects">
    <ol role="menu">
      <li v-for="project in projects" :key="project.id" @mouseover="activeProject = project" @mouseleave="activeProject = null">
        <nuxt-link :to="'/projekte/' + project.fields.slug" role="menuitem" class="project-link" exact>
          <h1>{{ project.fields.name }}</h1>
        </nuxt-link>
      </li>
    </ol>
    <ResponsiveImage v-if="activeImage" :image="activeImage" />
  </nav>
</template>

<script>
import ResponsiveImage from '~/components/ResponsiveImage'

export default {
  name: 'Projects',
  components: {
    ResponsiveImage
  },
  props: {
    projects: {
      type: Array, // We expect an array of pages that we need for our navigation
      required: true
    }
  },
  data () {
    return {
      activeProject: null
    }
  },
  computed: {
    activeImage () {
      if (this.activeProject == null) { return }

      return this.activeProject.fields.images[0]
    }
  }
}
</script>

<style lang="sass">
  @import '~/assets/_settings'

  .project-link
    display: block

  nav.projects
    padding-top: $leading
    line-height: 1.15
</style>
