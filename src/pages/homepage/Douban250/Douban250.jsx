import React, { Component } from 'react'
// import { Button, Icon } from 'antd'
// import api from '@/api'

class leeing extends Component {
  render () {
    return (
      <div className="douban-songs">
        <div className="header">
          豆瓣音乐250
          <a className="more">更多</a>
        </div>
        <ul className="content">
        {
          this.props.doubanMusic250.map((item, index) =>
            <li key={index}>
              <a href="">
                <img src={item.cover} alt=""/>
              </a>
              <p>
                <a href="music-name">{item.name}</a>
              </p>
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}

export default leeing
