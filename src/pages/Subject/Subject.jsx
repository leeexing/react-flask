import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, /* Rate, */ Skeleton } from 'antd'
import api from '@/api'

class Subject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasData: false,
      title: '',
      commonUseTag: 0,
      tags: [],
      collector: [],
      recommend: [],
    }
  }
  componentDidMount () {
    let subjectId = this.props.match.params.subjectId
    api.getSubjectDetail(subjectId).then(res => {
      console.log(res)
      this.setState({
        title: res.data.title,
        ...res.data.aside
      })
    })
  }
  render () {
    return (
      <div className="app-home subject">
        <h1 className="title">{this.state.title}</h1>
        <Row gutter={16}>
          <Col span={16}>
          {!this.state.hasData
            ? <Skeleton></Skeleton>
            : ''
          }
          </Col>
          <Col span={8} style={{paddingLeft: "50px"}}>
            <h2>豆瓣成员常用标签(共{this.state.commonUseTag}个)······</h2>
            <div className="tags-list">
            {this.state.tags.length > 1
              && this.state.tags.map(tag => (
                <Link to={"/tag/" + tag} key={tag}>{tag}</Link>
              ))
            }
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Subject
