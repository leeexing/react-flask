import React, { Component } from 'react'
import { Icon } from 'antd'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      artistsList: [
        {
          cover: 'https://cn.bing.com/az/hprichbg/rb/CalidrisCanutus_ZH-CN10519054459_1920x1080.jpg',
          artists: '梁晓雪',
          gener: '民谣'
        }
      ]
    }
  }
  render () {
    const artistsList = new Array(8).fill(this.state.artistsList[0])
    return (
      <div className="pop-artist">
        <div className="pop-header">
          本周流行音乐人
          <span>|</span>
          <span className="fast">上升最快音乐人</span>
        </div>
        <ul className="pop-list">
        {
          artistsList.map((item, index) => {
            let itemStyle = {
              backgroundImage: `url(${item.cover})`
            }
            return <li className="pop-item" key={index}>
              <div className="cover">
                <a className="artist-photo" style={itemStyle}>
                  <Icon className="play" type="play-circle" theme="outlined" />
                </a>
              </div>
              <a className="title">{item.artists}</a>
              <p className="gener">{item.gener}</p>
            </li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default leeing
