import React, { Component } from 'react'
import { Icon } from 'antd'
import api from '@/api'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editorRecommendSongs: []
    }
  }
  componentDidMount () {
    api.getEditorFeatureSongs().then(res => {
      this.setState({
        editorRecommendSongs: res.editorFeatureSongs
      })
    })
  }
  render () {
    const hotSongs = this.state.editorRecommendSongs
    return (
      <div className="editor-feature">
        <div className="header">
          编辑推荐
          <div className="btn-wrap">
            <Icon type="left-circle" theme="outlined" />
            <Icon type="right-circle" theme="outlined" />
          </div>
        </div>
        <div className="content">
          <ul className="feature-songs">
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
