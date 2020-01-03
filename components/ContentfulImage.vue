<template>
  <img :key="image.id" :src="image.fields.file.url">
</template>

<script>
export default {
  name: 'ContentfulImage',
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
img
  max-width: 100%

</style>
