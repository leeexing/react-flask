import React, { Component } from 'react'
import Header from './components/Header'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import 'styles/todo.less'

class TodoRedux extends Component {

  render () {
    return (
      <div className="app-home">
        <Header/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}

export default TodoRedux
