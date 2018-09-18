import React, { Component } from 'react'
import { Button } from 'antd'
import CountUp from 'components/CountUp'

class InfoCard extends Component {
  render () {
    return (
      <div className="info-card">
        <CountUp endValue="44885" infoText="音乐人" id="musician"/>
        <CountUp endValue="2663" infoText="博客" id="blog"/>
        <CountUp endValue="1126" infoText="厂牌" id="brand"/>
        <Button type="primary" block>我要加入</Button>
      </div>
    )
  }
}

export default InfoCard
