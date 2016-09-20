import { fromJS } from 'immutable'
import { createItemInDb, deleteItemInDb } from '../utils/api.js'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

const initialState = fromJS({})

const reducer = (state = initialState, { type, payload }) => {
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

export default reducer

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

/*export const saveItem = (text, date) => {
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
          date: date.valueOf(),
        },
      })
    })
  }
}
*/

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

