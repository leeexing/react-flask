import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
// import { Link } from 'react-router-dom'

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
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
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
          <Menu.Item key="login">
            <Icon type="login"/>登陆
          </Menu.Item>
          <Menu.Item key="register">
            <Icon type="coffee"/>注册
          </Menu.Item>
        </Menu>
        <div className="music-search">

        </div>
      </nav>
    )
  }
}

export default NavBar
