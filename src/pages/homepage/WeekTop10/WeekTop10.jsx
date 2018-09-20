import React, { Component } from 'react'
import { Button, Icon } from 'antd'
// import api from '@/api'

class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popularSongs: []
    }
  }
  componentDidMount () {
    // api.getWeekPopularSongs().then(res => {
    //   console.log('+++', res)
    // })
  }
  render () {
    const hotSongs = [
      {src: 'https://img1.doubanio.com/view/sitesong/small/public/1535692767.jpg', name: 'Hold On To My Side (留在我身边)', author: '梁晓雪', times: 9913},
      {src: 'https://img3.doubanio.com/view/site/small/public/5e7b323e46750dd.jpg', name: '大圣啊', author: '尚哲', times: 1735},
      {src: 'https://img1.doubanio.com/view/site/small/public/fa424d747eb8449.jpg', name: 'Bon Anniversaire', author: 'Magic', times: 365},
      {src: 'https://img1.doubanio.com/view/site/small/public/c7a7cbe1ae4ea1a.jpg', name: '燕园画像（女生版） ', author: 'Loop Fighter', times: 1025},
      {src: 'https://img3.doubanio.com/view/sitesong/small/public/1535031794.jpg', name: 'Last Days of Louis XIV (Mark Lee mix)', author: '绝对春节', times: 520},
    ]
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
          {
            hotSongs.map((song, index) =>
              <li className="artist-song" key={index}>
                <div className="avatar">
                  <img src={song.src} alt=""/>
                  <span>
                    <Icon  type="caret-right" theme="outlined" />
                  </span>
                </div>
                <div className="info">
                  <h3>{song.name}</h3>
                  <p>
                    <span>{song.author}</span>
                    <span>/</span>
                    <span>{song.times}</span>
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
