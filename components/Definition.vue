<script>
export default {
  functional: true,
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
  render (createElement, context) {
    let list = []
    if (context.props.text.length > 0) {
      list = [
        createElement('dt', context.props.term),
        createElement('dd', context.props.text)
      ]
    }
    return list
  }
}
</script>
<style lang="sass">
dt
  float: left

dd
  padding-left: 12em
</style>
