import moment from 'moment'

export default (value, format = 'MMMM YYYY') => {
  const parsed = new Date(value)
  if (parsed instanceof Date && !isNaN(parsed)) {
    return moment(parsed).locale('de').format(format)
  } else {
    return value
  }
}
