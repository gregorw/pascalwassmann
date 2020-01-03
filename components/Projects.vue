<template>
  <nav class="projects">
    <ol role="menu">
      <li v-for="project in projects" :key="project.id">
        <nuxt-link :to="'/' + project.fields.slug" role="menuitem" class="project-link">
          {{ project.fields.name }}
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
  @import '~/assets/settings.scss'

  .project-link
    font-weight: bold
    font-size: 2rem

  nav.projects
    padding-top: 2 * $leading
</style>
