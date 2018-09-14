import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Card} from 'antd'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoFooter from './TodoFooter'
import {pipe, length, filter, prop} from 'ramda'
import './todo.scss'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      isAllChecked: false,
      curretUser: null,
      value: 1
    }
  }
  componentDidMount() {
    console.log('todo list start')
    this.dom = ReactDOM.findDOMNode(this)
  }
  addTodo (item) {
    this.state.todos.push(item)
    this.setState({todos: this.state.todos})
  }
  changeTodoState (index, isDone, isChangeAll=false) {
    if (isChangeAll) {
      this.setState({
        todos: this.state.todos.map(todo => {
          todo.isDone = isDone
          return todo
        }),
        isAllChecked: isDone
      })
    } else {
      this.setState({
        todos: this.state.todos.map((todo, idx) => {
          if (index === idx) {
            todo.isDone = isDone
          }
          return todo
        })
      })
      this.allChecked()
    }
  }
  allChecked () {
    let isAllChecked = false
    if (this.state.todos.every(todo => todo.isDone)) {
      isAllChecked = true
    }
    this.setState({
      todos: this.state.todos,
      isAllChecked
    })
  }
  clearDone () {
    let todos = this.state.todos.filter(todo => !todo.isDone)
    this.setState({ todos })
  }
  deleteTodo (index) {
    this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos})
  }
  render () {
    let info = {
      isAllChecked: this.state.isAllChecked,
      todoCount: this.state.todos.length || 0,
      // todoDoneCount: (this.state.todos && (this.state.todos.filter(todo => todo.isDone).lenngth || 0))
      todoDoneCount: (this.state.todos && pipe(filter(prop('isDone')), length)(this.state.todos))
    }
    return (
      <div className="m-todo">
        <Card
          title="Todo List"
          style={{width: 500}}
        >
          <TodoHeader addTodo={this.addTodo.bind(this)}/>
          <TodoMain todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
          <TodoFooter {...info} clearDone={this.clearDone.bind(this)} changeTodoState={this.changeTodoState.bind(this)}/>
        </Card>
      </div>
    )
  }
}

export default Todo
