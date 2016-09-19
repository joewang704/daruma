import { ADD_ITEM, REMOVE_ITEM, CLEAR_DARUMA } from '../utils/actionConstants.js'
import { fromJS } from 'immutable'

const initialState = fromJS({})

const daruma = (state = initialState, { type }) => {
  switch (type) {
    case ADD_ITEM: {
      return state.set('msg', 'Item was added')
    }
    case REMOVE_ITEM: {
      return state.set('msg', 'Item was removed')
    }
    case CLEAR_DARUMA: {
      return state.set('msg', null)
    }
    default:
      return state
  }
}

export default daruma
