import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="todo-list-box">
    {
      todos.length === 0 && '记录世界纪录你'
    }
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList

