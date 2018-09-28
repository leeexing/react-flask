const TodoState = {
  todos: [],
  visibilityFilter: 'SHOW_COMPLETED'
}

const TodosReducer = (state = TodoState.todos, action) => {
  const {type} = action
  switch (type) {
    case 'ADD_TODO':
      return state.concat([{id: action.id, text: action.text, completed: false}])
    case 'DELETE_TODO':
      state.splice(action.index, 1)
      return state
    case 'TOGGLE_TODO':
      console.log(action, 666)
      return state.map(item =>
        action.id === item.id ? {...item, completed: !item.completed} : item
      )
    default:
      return state
  }
}

export default TodosReducer
