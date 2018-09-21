import React, { Component } from 'react'
import { Button } from 'antd'
import CountUp from 'components/CountUp'
import api from '@/api'

class InfoCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joinInfo: [{
        endValue: 0,
        typeName: '音乐人'
      }, {
        endValue: 0,
        typeName: '博客'
      }, {
        endValue: 0,
        typeName: '厂牌'
      }]
    }
  }
  componentDidMount () {
    api.getJoinInfo().then(res => {
      this.setState({
        joinInfo: res.joinInfo
      })
    })
  }
  changeCountup () {
    // let joinInfo = this.state.joinInfo.slice(0)
    // joinInfo[0].endValue += 1
    // this.setState({
    //   joinInfo
    // })
    api.getPopularSongs().then(console.log)
  }
  render () {
    return (
      <div className="info-card">
      {
        this.state.joinInfo.map((item, index) =>
          <CountUp endValue={item.endValue} infoText={item.typeName} id={'join-' + index} key={index}/>
        )
      }
        {/* <CountUp endValue={this.state.musician} infoText="音乐人" id="musician"/>
        <CountUp endValue={this.state.blog} infoText="博客" id="blog"/>
        <CountUp endValue={this.state.brand} infoText="厂牌" id="brand"/> */}
        <Button onClick={this.changeCountup.bind(this)} type="primary" block>我要加入</Button>
      </div>
    )
  }
}

export default InfoCard
