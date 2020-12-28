<template>
  <nav class="projects">
    <ol role="menu">
      <li v-for="project in projects" :key="project.id">
        <nuxt-link :to="'/projekte/' + project.fields.slug" role="menuitem" class="project-link">
          <h1>{{ project.fields.name }}</h1>
        </nuxt-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: {
      type: Array, // We expect an array of pages that we need for our navigation
      required: true
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
