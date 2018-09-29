import React, { Component } from 'react'
import { Row, Col } from 'antd'

class leeing extends Component {

  render () {
    return (
      <div className="app-home m-chart">
        <Row gutter={16}>
          <Col span={16}>
            <h3>音乐排行榜</h3>
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
