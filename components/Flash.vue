<template>
  <aside class="flash">
    <h2>{{ flash.fields.title }}</h2>
  </aside>
</template>

<script>
export default {
  props: {
    flash: {
      type: Object,
      required: true
    }
  }
}
</script>
