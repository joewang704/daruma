import React from 'react'
import { connect } from 'react-redux'
import { weekFromStartDate } from '../utils/calendar.js'
import { nextWeek, prevWeek } from '../ducks/calendar.js'
import DayColumn from './DayColumn'

const mapStateToProps = ({ calendar }) => ({
  startDateMoment: calendar.get('activeWeekStartDate')
})

const mapDispatchToProps = dispatch => ({
  nextWeek: () => dispatch(nextWeek()),
  prevWeek: () => dispatch(prevWeek())
})

const WeekView = ({ startDateMoment, nextWeek, prevWeek }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: '40px',
      }}>
        <i onClick={prevWeek} className="fa fa-arrow-left" aria-hidden="true"></i>
        <i onClick={nextWeek} className="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
      <div style={{
        display: 'flex',
        width: '100%',
        height: '90%',
      }}>
        {
          weekFromStartDate(startDateMoment).map(
            day => <DayColumn dayMoment={day} key={day} />)
        }
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekView)

