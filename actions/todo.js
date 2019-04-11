
function todoAction(todo) {
  return {
    type: "ADD_TODO",
    todo,
  }
}

export default todoAction