<template>
  <div class="options-wrapper">
    <aside class="options">
      <b>Text Optionen</b>
      <template v-for="option in options">
        <label :key="option.name">
          <input v-model="textOption" :value="option.class" name="text" type="radio" @change="setText">
          {{ option.name }}
        </label>
      </template>
    </aside>
  </div>
</template>

<style lang="sass" scoped>
.options-wrapper
  position: absolute
  right: 0
  top: 0
  bottom: 0
  overflow: hidden

.options
  opacity: 0
  transform: translateX(19rem)
  transition: all 0.3s ease-in-out
  background: rgba(black, 0.85)
  color: white
  padding: 1rem
  width: 20rem
  height: 100%

  &:hover
    transform: translateX(0rem)
    opacity: 1
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)

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
        name: 'Hintergrund weiss mit Abstand',
        class: 'text-bg-white-gap'
      },
      {
        name: 'Hintergrund weiss mit Abstand, visited transparent',
        class: ['text-bg-white-gap', 'visited-transparent']
      },
      {
        name: 'Hintergrund weiss mit Abstand, visited strike',
        class: ['text-bg-white-gap', 'visited-strike']
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
      },
      {
        name: '«Schatten» doppel-weiss',
        class: 'text-shadow-double-white'
      }],
      textOption: 'text-none'
    }
  },
  methods: {
    setText (event) {
      document.body.classList.remove(...this.options.flatMap(o => o.class))
      document.body.classList.add(...event.target.value.split(','))
    }
  }
}
</script>
