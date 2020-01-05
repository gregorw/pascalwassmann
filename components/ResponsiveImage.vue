<template>
  <img :key="image.id" :data-src="responsive_url" :src="url" class="cld-responsive">
</template>

<script>
import cloudinary from 'cloudinary-core'
const cl = new cloudinary.Cloudinary({
  cloud_name: 'pw',
  secure: true,
  type: 'fetch',
  fetch_format: 'auto'
})

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
        width: '200', crop: 'scale'
      })
    },
    responsive_url () {
      return cl.url(this.secure_url, {
        width: 'auto', dpr: 'auto', responsive: 'true', crop: 'limit'
      })
    },
    secure_url () {
      return `https:${this.image.fields.file.url}`
    }
  },
  mounted: () => {
    cl.responsive()
  }
}
</script>

<style lang="sass">
img
  max-width: 100%
  margin: 0 auto 2rem
  display: block
  max-height: 90vh

</style>
