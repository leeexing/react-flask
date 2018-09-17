import React, { Component } from 'react'
import { Button } from 'antd'
import CountUp from 'components/CountUp'

class InfoCard extends Component {
  render () {
    return (
      <div className="info-card">
        <CountUp infoText="音乐人" id="musician"/>
        <CountUp infoText="博客" id="blog"/>
        <CountUp infoText="厂牌" id="brand"/>
        <Button type="primary" block>我要加入</Button>
      </div>
    )
  }
}

export default InfoCard
