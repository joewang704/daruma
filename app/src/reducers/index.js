import { combineReducers } from 'redux'
import items from './items'
import daruma from './daruma'

const reducers = combineReducers({
  items,
  daruma
})

export default reducers
