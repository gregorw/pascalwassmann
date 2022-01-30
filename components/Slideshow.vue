<template>
  <div class="images">
    <ResponsiveImage v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
import ResponsiveImage from '~/components/ResponsiveImage'

export default {
  components: {
    ResponsiveImage
  },
  props: {
    images: { type: Array, required: true }
  }
}
</script>

<style lang="sass" scoped>
.images
  overflow-x: auto
  display: flex
  align-items: center
  scroll-snap-type: x mandatory
  white-space: nowrap
  position: fixed
  top: 100px
  scroll-padding: 50%
  left: 0
  width: 100vw
  height: 80vh
  padding: 0 5rem

  img:last-child
    padding-right: 20vw
</style>
