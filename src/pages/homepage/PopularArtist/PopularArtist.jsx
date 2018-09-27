import React, { Component } from 'react'
import { Icon } from 'antd'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'hot'
    }
  }
  handleClickTab (type) {
    console.log(type)
    this.setState({
      type
    })
  }
  render () {
    const renderData = this.state.type === 'hot' ? this.props.popularArtists : this.props.newArtists
    return (
      <div className="pop-artist">
        <div className="pop-header">
          <span className={['hot', this.state.type === 'hot' && 'on'].join(' ')} onClick={this.handleClickTab.bind(this, 'hot')}>本周流行音乐人</span>
          <span className="cut-off-line">|</span>
          <span className={['fast', this.state.type === 'fast' && 'on'].join(' ')} onClick={this.handleClickTab.bind(this, 'fast')}>上升最快音乐人</span>
        </div>
        <ul className="pop-list">
        {
          renderData.map((item, index) => {
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
