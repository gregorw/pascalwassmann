<template>
  <nuxt-link :to="'/jobs/' + job.fields.slug" class="job-link padded top-line">
    {{ job.fields.initiation }} {{ job.fields.title }} {{ job.fields.subtitle }}
    <span class="arrow"> → </span>
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
  display: block

  h2
    font-weight: normal
    margin-bottom: 0

  .arrow
    float: right
</style>
