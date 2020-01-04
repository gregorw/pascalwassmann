<template>
  <aside class="flash">
    <p>{{ date | dateFormat }}<br>{{ flash.fields.description }}</p>
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
