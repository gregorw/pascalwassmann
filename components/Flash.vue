<template>
  <aside class="flash">
    <p>{{ date | dateFormat('DD.MM.YYYY') }} – {{ flash.fields.title }}</p>
  </aside>
</template>

<script>
import dateFormat from '~/custom/dateFormat'

export default {
  filters: {
    dateFormat
  },
  props: {
    flash: {
      type: Object,
      required: true
    }
  },
  computed: {
    date () {
      return this.flash.fields.date
    }
  }
}
</script>

<style lang="sass">
@import '~/assets/settings.scss'

.flash
  margin-bottom: $leading
</style>
