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
        <Row>
          <Col span={24}>
            <h1>豆瓣音乐标签</h1>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Leeing
