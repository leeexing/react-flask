import React, { Component } from 'react'
import { Icon, Button } from 'antd'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      next: false
    }
  }
  handleClickNext (next) {
    this.setState({
      next
    })
  }
  render () {
    const hotSongs = this.props.editorFeatureSongs
    return (
      <div className="editor-feature">
        <div className="header">
          编辑推荐
          <div className="btn-wrap">
            <Icon className={this.state.next && 'disabled'} type="left-circle" theme="outlined" onClick={this.handleClickNext.bind(this, true)}/>
            <Icon className={!this.state.next && 'disabled'} type="right-circle" theme="outlined" onClick={this.handleClickNext.bind(this, false)}/>
          </div>
        </div>
        <div className="content">
          <ul className={['feature-songs', this.state.next && 'next'].join(' ')}>
          {
            hotSongs.map((song, index) => {
              let itemStyle = {
                backgroundImage: `url(${song.cover})`
              }
              return <li className="feature-song" key={index}>
                <a href="" className="cover" style={itemStyle}>
                  <div className="song-text"></div>
                  <Icon className="play" type="play-circle" theme="outlined" />
                </a>
                <p className="type">{song.type}</p>
                <h3>
                  <a href="">{song.name}</a>
                </h3>
                <h4>{song.focus}</h4>
                <p>{song.detail}</p>
              </li>

            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default leeing
