import React, { Component } from 'react'
import { Button } from 'antd'
import CountUp from 'components/CountUp'

class InfoCard extends Component {
  changeCountup () {
    console.log('加如豆瓣')
  }
  render () {
    return (
      <div className="info-card">
        {
          this.props.joinInfo.map((item, index) =>
            <CountUp endValue={item.endValue} infoText={item.typeName} id={'join-' + index} key={index}/>
          )
        }
        <Button onClick={this.changeCountup.bind(this)} type="primary" block>我要加入</Button>
      </div>
    )
  }
}

export default InfoCard
