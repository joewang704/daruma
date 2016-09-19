import React from 'react'
import { dayMomentToStr } from '../../utils/calendar.js'
import Item from '../Item'
import ItemPlaceholder from '../ItemPlaceholder'

const DayColumn = ({ dayMoment, items, itemPlaceholder, createItemPlaceholder }) => {
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
    flexDirection: 'column',
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
  const dayStyle = {
    fontSize: '16px',
  }
  const dateStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  }
  return (
    <div style={wrapperStyle}>
      <div style={labelStyle}>
        <span style={dayStyle}>{dayMomentToStr(dayMoment)}</span>
        <span style={dateStyle}>{dayMoment.format('MM/DD')}</span>
      </div>
      <div
        style={mainStyle}
        onClick={() => createItemPlaceholder(dayMoment)}
      >
        {
          items.map(({ id, text }) => <Item key={id} id={id} text={text} />)
        }
        {
          itemPlaceholder ? <ItemPlaceholder dayMoment={dayMoment}/> : null
        }
      </div>
    </div>
  )
}

export default DayColumn
