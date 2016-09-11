import React from 'react'
import { dayMomentToStr } from '../../utils/calendar.js'
import Item from '../Item'

const DayColumn = ({ dayMoment, items, createEmptyItem }) => {
  const wrapperStyle = {
    height: '100%',
    width: `${100/7}%`,
    borderRight: '1px solid #ddd',
  }
  const labelStyle = {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const mainStyle = {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <div style={wrapperStyle}>
      <div style={labelStyle}>
        {dayMomentToStr(dayMoment)}
      </div>
      <div
        style={mainStyle}
        onClick={() => createEmptyItem(dayMoment)}
      >
        {
          items.map(({ id, text }) => <Item key={id} id={id} text={text} />)
        }
      </div>
    </div>
  )
}

export default DayColumn
