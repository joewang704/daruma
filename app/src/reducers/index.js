import { combineReducers } from 'redux'
import items from './items'
import daruma from './daruma'
import ui from './ui'

const reducers = combineReducers({
  items,
  daruma,
  ui
})

export default reducers
