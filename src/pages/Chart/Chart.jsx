import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'
import api from '@/api'
import 'styles/chart.less'


class leeing extends Component {

  componentDidMount () {
    // api.getChart().then(res => {
    //   console.log(res)
    // })
  }
  render () {
    return (
      <div className="app-home m-chart">
        <Row gutter={16}>
          <Col span={16}>
            <h3 className="sub-title">音乐排行榜</h3>
            <div className="top-content">
              <span>本周音乐人最热单曲榜</span>
              <span className="play-icon">
                <Icon type="caret-right" theme="outlined" />
              </span>
            </div>
            <div className="chart-content">
              <ul>
                <li className="song-item clearfix">
                  <span className="index-num">1</span>
                  <a href="" className="cover">
                    <img src="https://cn.bing.com/az/hprichbg/rb/PumpkinPatch_ZH-CN13388807715_1920x1080.jpg" alt=""/>
                  </a>
                  <div className="info">
                    <p className="play">
                      <a href="">事项</a>
                    </p>
                    <p>邵亦被</p>
                  </div>
                  <span className="trend">上榜七天</span>
                  <span className="days">1</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={8}>
            <h4>豆瓣新碟榜...</h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default leeing
