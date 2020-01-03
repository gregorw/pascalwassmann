<template>
  <nav class="projects">
    <ul role="menu">
      <li v-for="(project, index) in projects" :key="index">
        <nuxt-link :to="'/' + project.fields.slug" role="menuitem">
          {{ project.fields.name }}
        </nuxt-link>
      </li>
    </ul>
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

<style lang="scss">
  nav { display: block; }
</style>
