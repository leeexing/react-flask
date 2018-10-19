import React, { Component } from 'react'
import { Row, Col } from 'antd'
import api from '@/api'

class Leeing extends Component {

  componentDidMount () {
    api.getTagsData().then(res => {
      console.log(res)
    })
  }
  render () {
    return (
      <div className="app-home">
        <Row gutter={16}>
          <Col span={16}>
            <h1>豆瓣音乐标签</h1>

          </Col>
          <Col span={8}>
            标签直达 ......

          </Col>
        </Row>
      </div>
    )
  }
}

export default Leeing
