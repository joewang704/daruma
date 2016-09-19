import { fromJS } from 'immutable'
import { ADD_ITEM, ADD_ITEM_PLACEHOLDER, REMOVE_ITEM_PLACEHOLDER } from '../utils/actionConstants.js'

const initialState = fromJS({})

const ui = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_PLACEHOLDER: {
      const { date } = payload
      return state.set('itemPlaceholder', fromJS({
        date,
      }))
    }
    case REMOVE_ITEM_PLACEHOLDER:
    case ADD_ITEM:
      return state.delete('itemPlaceholder')
    default:
      return state
  }
}

export default ui
