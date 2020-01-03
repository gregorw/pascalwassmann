<template>
  <img :key="image.id" :src="url" class="cld-responsive">
</template>

<script>
import cloudinary from 'cloudinary-core'
const cl = new cloudinary.Cloudinary({ cloud_name: 'pw', secure: true })

export default {
  name: 'ResponsiveImage',
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    url () {
      return cl.url(this.secure_url, {
        type: 'fetch', width: '800', crop: 'scale', fetch_format: 'auto'
      })
    },
    secure_url () {
      return `https:${this.image.fields.file.url}`
    }
  }
}
</script>

<style lang="sass">
img
  max-width: 100%

</style>
