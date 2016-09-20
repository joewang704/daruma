import moment from 'moment'

export const dayMomentToStr = (dayMoment) => {
  return dayMoment.format('dddd')
    .replace('urday', '')
    .replace('day', '')
    .replace('nes', '').toUpperCase()
}

export const weekFromStartDate = (startDate) =>
  [0, 1, 2, 3, 4, 5, 6].map(
    (num) => moment(startDate).add(num, 'days')
  )
