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
  render () {
    return (
      <nav className="app-nav">
        <div className="nav-bd">
          <div className="nav-items"></div>
          <div className="nav-others">
            <div className="nav-doubanapp"></div>
            <div className="nav-info"></div>
          </div>
        </div>
        <div className="nav-music">
          豆瓣音乐
          <Search
            placeholder="唱片名、表演者、条码、ISRC"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <div className="nav-music"></div>
        </div>
      </nav>
    )
  }
}

export default NavBar
