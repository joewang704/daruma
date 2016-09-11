import { ADD_ITEM, REMOVE_ITEM } from '../utils/actionConstants'

let itemId = 0

export const createItem = (text, date) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: itemId++,
      text,
      date,
    },
  }
}

export const deleteItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

