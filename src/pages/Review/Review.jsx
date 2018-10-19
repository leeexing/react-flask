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
            <h1>豆瓣最新的乐评</h1>

          </Col>
          <Col span={8}>
            <p>如果你觉得一篇评论对你有帮助，请你点击“有用”。你的投票直接决定哪些评论出现在豆瓣首页和“豆瓣最受欢迎的评论”里，以及在书、电影和音乐介绍页里评论的排序。</p>

            <p>所有“没用”的点击都是匿名的。</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Leeing
