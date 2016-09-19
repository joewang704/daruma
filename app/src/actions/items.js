import { ADD_ITEM, EDIT_ITEM, REMOVE_ITEM,
  ADD_ITEM_PLACEHOLDER, REMOVE_ITEM_PLACEHOLDER } from '../utils/actionConstants'
import { createItemInDb, deleteItemInDb } from '../utils/api.js'

export const createItem = (text, date) => {
  return dispatch => {
    createItemInDb({
      text,
      date: date.format('YYYY-MM-DD'),
    }).then((res) => {
      dispatch({
        type: ADD_ITEM,
        payload: {
          id: res.id,
          text,
          date,
        },
      })
    })
  }
}

export const saveItem = (text, date) => {
  return dispatch => {
    // TODO: this should edit item in db
    createItemInDb({
      text,
      date: date.format('YYYY-MM-DD'),
    }).then((res) => {
      dispatch({
        type: EDIT_ITEM,
        payload: {
          id: res.id,
          text,
          date,
        },
      })
    })
  }
}

export const createItemPlaceholder = (date) => {
  return {
    type: ADD_ITEM_PLACEHOLDER,
    payload: {
      date,
    },
  }
}

export const deleteItemPlaceholder = () => {
  return {
    type: REMOVE_ITEM_PLACEHOLDER,
  }
}

export const deleteItem = id => {
  return dispatch => {
    deleteItemInDb(id).then((res) => {
      dispatch({
        type: REMOVE_ITEM,
        payload: {
          id,
        },
      })
    })
  }
}

