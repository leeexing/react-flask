import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, completed, text }) => (
  <li
    className="todo-list-item"
    onClick={onClick}
  >
    {completed
      ? <Icon type="smile" theme="twoTone" />
      : <Icon type="meh" theme="twoTone" twoToneColor="#eb2f96" />
    }
    <span className="todo-list-text">{text}</span>
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem
