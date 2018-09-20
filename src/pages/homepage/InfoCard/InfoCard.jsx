import React, { Component } from 'react'
import { Button } from 'antd'
import CountUp from 'components/CountUp'
import api from '@/api'

class InfoCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      musician: 44885,
      blog: 2663,
      brand: 1126
    }
  }
  getHotNums () {
    api.getMusicList().then(console.log)
  }
  changeCountup () {
    this.setState({
      musician: this.state.musician + 1
    })
  }
  render () {
    return (
      <div className="info-card">
        <CountUp endValue={this.state.musician} infoText="音乐人" id="musician"/>
        <CountUp endValue={this.state.blog} infoText="博客" id="blog"/>
        <CountUp endValue={this.state.brand} infoText="厂牌" id="brand"/>
        <Button onClick={this.changeCountup.bind(this)} type="primary" block>我要加入</Button>
      </div>
    )
  }
}

export default InfoCard
