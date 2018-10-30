import React, { Component } from 'react'
import { Row, Col, Icon, Tag } from 'antd'
import api from '@/api'
import 'styles/chart.less'


class leeing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotList: [],
      newAlbum: [],
      popMusician: []
    }
  }
  componentDidMount () {
    api.getChart().then(res => {
      console.log(res)
      if (res.result) {
        this.setState({
          ...this.state,
          ...res.data
        })
      }
    })
  }
  render () {
    return (
      <div className="app-home m-chart">
        <h3 className="sub-title">音乐排行榜</h3>
        <Row gutter={16}>
          <Col span={16}>
            <div className="top-content">
              <span>本周音乐人最热单曲榜</span>
              <span className="play-icon">
                <Icon type="caret-right" theme="outlined" />
              </span>
            </div>
            <div className="chart-content">
              <ul>
                {this.state.hotList.length > 1 &&
                  this.state.hotList.map((item, index) => {
                    if (index < 10) {
                      return (
                        <li className="song-item clearfix" key={item.id}>
                          <span className="index-num">{index+1}</span>
                          <a href="" className="cover">
                            <img src={item.cover} alt=""/>
                          </a>
                          <div className="info">
                            <p className="play">
                              <a href="">{item.title}</a>
                            </p>
                            <p>{item.infoText}</p>
                          </div>
                          {
                            item.trendArrow.includes('up')
                            ? <Tag color="green">Up</Tag>
                            : <Tag color="red">Down</Tag>
                          }
                          <span className="trend">{item.days}</span>
                          <span className="days">{item.trend}</span>
                        </li>
                      )
                    } else {
                      return (
                        <li className="song-item clearfix" key={item.id}>
                          <span className="index-num">{index+1}</span>
                          <div className="info">
                            <sapn className="play">
                              <a className="a">{item.title}</a>
                            </sapn>
                            <span>{item.infoText}</span>
                          </div>
                          <span className="trend">{item.days}</span>
                          <span className="days">{item.trend}</span>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          </Col>
          <Col span={8} style={{paddingLeft: '50px'}}>
            <h4>豆瓣新碟榜 . . . . . .</h4>
            <ul className="new-album">
            {this.state.newAlbum.map((item, index) => (
                <li key={index}>
                  <span className="index">{index}</span>
                  <p className="info">
                    <a className="a name">{item.title}</a>
                    <i>/</i>
                    <span className="author">{item.author}</span>
                  </p>
                  <span className="days">{item.info}</span>
                </li>
              ))
            }
            </ul>
            <h4>本周流行音乐人 . . . . . .</h4>
            <ul className="pop-musician">
            {this.state.popMusician.map((item, index) => (
                <li className="clearfix" key={item.cover}>
                  <span className="index">{index}</span>
                  <a href="" className="avatar">
                    <img src={item.cover} alt=""/>
                  </a>
                  <div className="detail">
                    <a href="" className="a name">{item.author}</a>
                    <p>{item.info}</p>
                    <p>{item.focus}</p>
                  </div>
                </li>
              ))
            }
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default leeing
