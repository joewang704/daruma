import { connect } from 'react-redux'
import { createItem } from '../../actions/items'
import DayColumn from './DayColumn'

const mapStateToProps = ({ items }, ownProps) => {
  if (items && items.size > 0) {
    const itemObj = items.toJS()
    console.log(itemObj)
    return {
      items: Object.keys(itemObj).filter((id) =>
        ownProps.dayMoment.isSame(itemObj[id].date)
      ).map((id) => itemObj[id])
    }
  }
  return {
    items: []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createEmptyItem: (date) => dispatch(createItem('', date)),
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayColumn)

export default Container

