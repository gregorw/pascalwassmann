<template>
  <aside class="flash padded top-line">
    <p>{{ date | dateFormat }} – {{ flash.fields.description }}</p>
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
