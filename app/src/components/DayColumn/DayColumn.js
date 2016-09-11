import React from 'react'
import { dayMomentToStr } from '../../utils/calendar.js'
import Item from '../Item'

const DayColumn = ({ dayMoment, items, createEmptyItem }) => {
  return (
    <div style={{
      height: '100%',
      width: `${100/7}%`,
      borderRight: '1px solid #ddd',
    }}>
      <div style={{
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        { dayMomentToStr(dayMoment) }
      </div>
      <div
        style={{
          width: '100%',
          height: '90%',
          backgroundColor: 'white',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
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
