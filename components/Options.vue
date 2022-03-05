<template>
  <aside class="options">
    <b>Text Optionen</b>
    <template v-for="option in options">
      <label :key="option.class">
        <input v-model="textOption" v-on:change="setText" :value="option.class" name="text" type="radio">
        {{ option.name }}
      </label>
    </template>
  </aside>
</template>

<style lang="sass" scoped>
.options
  position: absolute
  right: -19rem
  top: 0
  bottom: 0
  opacity: 0
  transition: all 0.3s ease-in-out
  background: rgba(black, 0.85)
  color: white
  padding: 1rem
  width: 20rem

  &:hover
    opacity: 1
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
    right: 0

  label
    display: block
</style>

<script>
export default {
  data () {
    return {
      options: [{
        name: 'Bisher',
        class: 'text-none'
      },
      {
        name: 'Hintergrund weiss',
        class: 'text-bg-white'
      },
      {
        name: 'Hintergrund transparent',
        class: 'text-bg-transparent'
      },
      {
        name: 'Hintergrund verschwommen',
        class: 'text-bg-blur'
      },
      {
        name: '«Schatten» weiss',
        class: 'text-shadow-white'
      }],
      textOption: 'text-none'
    }
  },
  methods: {
    setText (event) {
      document.body.classList.remove(...this.options.map(o => o.class))
      document.body.classList.add(event.target.value)
    }
  }
}
</script>
