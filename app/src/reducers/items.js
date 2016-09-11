import { ADD_ITEM, REMOVE_ITEM } from '../utils/actionConstants.js'
import { fromJS } from 'immutable'

const initialState = fromJS({})

const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM: {
      const { id, text, date } = payload
      return state.set(id, fromJS({
        id,
        text,
        date,
      }))
    }
    case REMOVE_ITEM: {
      return state.delete(payload.id)
    }
    default:
      return state
  }
}

export default items
