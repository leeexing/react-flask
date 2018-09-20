import React, { Component } from 'react'
import { Icon } from 'antd'
import api from '@/api'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularArtistList: []
    }
  }
  componentDidMount () {
    api.getPopularArtists().then(res => {
      this.setState({
        popularArtistList: res.topArtists
      })
    })
  }
  render () {
    return (
      <div className="pop-artist">
        <div className="pop-header">
          本周流行音乐人
          <span className="cut-off-line">|</span>
          <span className="fast">上升最快音乐人</span>
        </div>
        <ul className="pop-list">
        {
          this.state.popularArtistList.map((item, index) => {
            let itemStyle = {
              backgroundImage: `url(${item.artistPhotoImg})`
            }
            return <li className="pop-item" key={index}>
              <div className="cover">
                <a className="artist-photo" style={itemStyle}>
                  <Icon className="play" type="play-circle" theme="outlined" />
                </a>
              </div>
              <a className="title">{item.name}</a>
              <p className="gener">{item.type}</p>
            </li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default leeing
