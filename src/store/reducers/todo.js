const TodoState = {
  todos: [],
  visibilityFilter: 'SHOW_COMPLETED'
}

const TodosReducer = (state = TodoState, action) => {
  // console.log('todosReducer was called with state ', state, 'and action', action)
  const {type} = action
  switch (type) {
    case 'ADD_TODO':
      return state.concat([{text: action.text, completed: false}])
    case 'DELETE_TODO':
      state.splice(action.index, 1)
      return state
    case 'TOGGLE_TODO':
      return state.map((item, index) =>
        action.index === index ? {text: item.text, completed: !item.completed} : item
      )
    default:
      return state
  }
}

export default TodosReducer
