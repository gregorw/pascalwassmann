<template>
  <dd v-if="isPresent">
    {{ term }}: {{ text | dateFormat }}
  </dd>
</template>

<script>
import dateFormat from '~/custom/dateFormat'

export default {
  filters: {
    dateFormat
  },
  props: {
    term: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    isPresent () {
      return this.text.length > 0
    }
  }
}
</script>
