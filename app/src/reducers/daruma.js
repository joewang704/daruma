import { ADD_ITEM, REMOVE_ITEM } from '../utils/actionConstants.js'
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
    default:
      return state
  }
}

export default daruma
