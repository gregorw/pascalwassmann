<template>
  <aside class="job">
    <h2>{{ job.fields.title }}</h2>
  </aside>
</template>

<script>
export default {
  props: {
    job: {
      type: Object, // We expect an array of pages that we need for our navigation
      required: true
    }
  }
}
</script>
