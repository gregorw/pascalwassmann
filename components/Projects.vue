<template>
  <nav class="projects">
    <ol role="menu">
      <li v-for="project in projects" :key="project.id">
        <nuxt-link :to="'/projekte/' + project.fields.slug" role="menuitem" class="project-link" exact>
          <h1>{{ project.fields.name }}</h1>
        </nuxt-link>
      </li>
    </ol>
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
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
  computed: {
    images () {
      return this.projects.map(p => p.fields.images[0])
    }
  }
}
</script>

<style lang="sass">
  @import '~/assets/_settings'

  .project-link
    display: block

    &:hover
      text-decoration: underline

  nav.projects
    padding-top: $leading
    line-heigh: 1.2
</style>
