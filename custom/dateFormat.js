import moment from 'moment'

export default (value, format = 'MMMM YYYY') => {
  const date = moment(value)
  if (date.isValid()) {
    return moment(date).locale('de').format(format)
  } else {
    return value
  }
}
