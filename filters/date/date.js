import moment from 'moment'

export default value => {
  if (!value) return ''
  return moment(String(value)).format('MM-DD-YYYY')
}
