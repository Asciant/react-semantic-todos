import * as icon from 'identicon.js'
import * as md5 from 'md5.js'

function todoReducer(state = [], action) {
  console.log(`Reducer with action ${action.type}`)
  switch(action.type) {
    case 'ADD_TODO': {
      let hash = new md5.default().update(btoa(Math.random()).substring(0,30)).digest('hex')

      return [...state, {
        task: action.task,
        date: Date.now(),
        icon: new icon.default(hash, {size: 64, format: 'svg'}).toString(),
        key: hash
      }]
    }
    default : return state
  }
}

export default todoReducer