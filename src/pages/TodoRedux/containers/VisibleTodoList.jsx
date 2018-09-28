import { connect } from 'react-redux'
import { toggleTodo } from '@/store/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filterType) => {
  console.log(todos, filterType, '*-*-*-*')
  switch (filterType) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknow filter: ' + filterType)
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: getVisibleTodos(state.todos, state.visibleFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
