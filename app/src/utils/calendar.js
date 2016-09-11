import moment from 'moment'

export const dayMomentToStr = (dayMoment) => {
  return dayMoment.format('dddd')
    .replace('urday', '')
    .replace('day', '')
    .replace('nes', '').toUpperCase()
}

export const days = [0, 1, 2, 3, 4, 5, 6].map((num) => {
  return moment().startOf('isoWeek').add(num, 'days')
})
