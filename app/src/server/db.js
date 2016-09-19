import { request } from './utils'
import { List, Set, OrderedSet, fromJS } from 'immutable'
import moment from 'moment'

export const getGroups = () => {
  return request('/groups', 'GET')
    .then((groups) => {
      return groups.reduce((obj, { id, name, color }) => {
        return Object.assign(obj, {
          [id]: {
            id,
            name,
            color,
            items: [],
          },
        })
      }, {})
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}

export const getItems = () => {
  return request('/items', 'GET')
    .then((items) => {
      return items.reduce((obj, {
        id,
        text,
        date,
      }) => {
        return obj.set(id, {
          id,
          text,
          date: date ? moment(date.split('T')[0]).valueOf() : null,
        })
      }, fromJS({}))
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}

export const getInitialStoreState = () => {
  return Promise.all([getItems()]).then(([items]) => {
    return {
      items,
    }
  })
}
