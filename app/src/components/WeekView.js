import React from 'react'
import { days } from '../utils/calendar.js'
import DayColumn from './DayColumn'

const WeekView = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
    }}>
      {
        days.map(day => <DayColumn dayMoment={day} key={day} />)
      }
    </div>
  )
}

export default WeekView

