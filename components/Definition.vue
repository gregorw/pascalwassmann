<script>
import moment from 'moment'

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
      let value = context.props.text
      const date = moment(value)
      if (date.isValid()) {
        value = date.locale('de').format('MMMM YYYY')
      }
      list = [
        createElement('dt', context.props.term),
        createElement('dd', value)
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
