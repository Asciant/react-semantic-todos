
function todoReducer(state = [], action) {
  console.log(`Reducer with ${action.type}`)
  switch(action.type) {
    case 'ADD_TODO': {
      return [...state, {
        todo: action.todo
      }]
    }
    default : return state
  }
}

export default todoReducer