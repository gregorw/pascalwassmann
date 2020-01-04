<template>
  <aside class="flash">
    <h2>{{ date | dateFormat('DD. MMMM YYYY') }} {{ flash.fields.title }}</h2>
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
