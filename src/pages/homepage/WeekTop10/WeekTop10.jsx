import React, { Component } from 'react'
import { Button, Icon } from 'antd'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  handleHotSongs (index) {
    console.log(index, '+++')
    this.setState({
      index
    })
  }
  render () {
    const activeSection = this.props.weekTop10.sections[this.state.index]
    const hotSongs = activeSection ? activeSection.songs : []
    return (
      <div className="hot-songs">
        <div className="header">
          本周单曲榜
          <Button className="play-all" type="primary" size="small"><Icon type="caret-right" theme="outlined" />播放全部</Button>
        </div>
        <div className="content">
          <ul className="section-titles">
          {
            this.props.weekTop10.sections.map((item, index) =>
              <li className={this.state.index === index ? 'on' : ''} key={index} onClick={this.handleHotSongs.bind(this, index)}>
                <a>{item.title}</a>
              </li>
            )
          }
          </ul>
          <ul className="hot-artist-songs">
          {
            hotSongs.map((song, index) =>
              <li className="artist-song" key={index}>
                <div className="avatar">
                  <img src={song.picture} alt=""/>
                  <span>
                    <Icon  type="caret-right" theme="outlined" />
                  </span>
                </div>
                <div className="info">
                  <h3>{song.title}</h3>
                  <p>
                    <span>{song.artist_name}</span>
                    <span>/</span>
                    <span>{song.play_count}</span>
                    <span>次播放</span>
                  </p>
                </div>
                <div className="rank">{index + 1}</div>
              </li>
            )
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default leeing
