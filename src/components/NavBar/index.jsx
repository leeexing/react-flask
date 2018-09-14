import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 'home'
    }
  }
  handleClick (e) {
    console.log('click', e)
    this.setState({
      current: e.key
    })
  }
  render () {
    return (
      <nav className="app-nav">
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home"/>豆瓣
          </Menu.Item>
          <Menu.Item key="film">
            <Icon type="cloud"/>电影
          </Menu.Item>
          <Menu.Item key="reading">
            <Icon type="book"/>读书
          </Menu.Item>
        </Menu>
      </nav>
    )
  }
}

export default NavBar
