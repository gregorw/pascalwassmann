<template>
  <nuxt-link :to="'/jobs/' + job.fields.slug" class="job-link padded top-line">
    <h2>{{ job.fields.initiation }} {{ job.fields.title }}</h2>
    <p>{{ job.fields.subtitle }} →</p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/settings.scss'

.job-link
  h2
    font-weight: normal
    margin-bottom: 0

  display: block
</style>
