import React, { Component } from 'react'
import { Button, Icon } from 'antd'

class leeing extends Component {

  render () {
    return (
      <div className="hot-songs">
        <div className="header">
          本周单曲榜
          <Button className="play-all" type="primary" size="small"><Icon type="caret-right" theme="outlined" />播放全部</Button>
        </div>
        <div className="content">
          <ul className="section-titles">
            <li className="on"><a href="">最热</a></li>
            <li><a href="">摇滚</a></li>
            <li><a href="">民谣</a></li>
            <li><a href="">流行</a></li>
            <li><a href="">电子</a></li>
            <li><a href="">说唱</a></li>
          </ul>
          <ul className="hot-artist-songs">
            <li className="artist-song">
              <div className="avatar">
                <img src="https://img1.doubanio.com/view/sitesong/small/public/1535692767.jpg" alt=""/>
              </div>
              <div className="info"></div>
              <div className="rank"></div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default leeing
