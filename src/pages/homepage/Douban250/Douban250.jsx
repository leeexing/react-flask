import React, { Component } from 'react'
// import { Button, Icon } from 'antd'
import api from '@/api'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularSongs: []
    }
  }
  componentDidMount () {
    api.getDouban250().then(res => {
      this.setState({
        popularSongs: res.douban250
      })
    })
  }
  render () {
    return (
      <div className="douban-songs">
        <div className="header">
          豆瓣音乐250
          <a className="more">更多</a>
        </div>
        <ul className="content">
        {
          this.state.popularSongs.map((item, index) =>
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
