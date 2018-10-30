import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Rate, Skeleton } from 'antd'
import api from '@/api'
import 'styles/subject.less'

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
            <h4 className="aside-title">豆瓣成员常用标签(共{this.state.commonUseTag}个) · · · · · ·</h4>
            <div className="tags-list">
            {this.state.tags.length > 1
              && this.state.tags.map(tag => (
                <Link to={"/tag/" + tag} key={tag}>{tag}</Link>
              ))
            }
            </div>
            <h4 className="aside-title">一下豆列推荐 · · · · · ·<a style={{fontSize: '12px'}}>(全部)</a></h4>
            <ul className="doulist">
            {this.state.recommend.length > 1 &&
              this.state.recommend.map(item => (
                <li key={item.titleLink}>
                  <a href="">{item.title}</a>
                  <span>{item.author}</span>
                </li>
              ))
            }
            </ul>
            <h4 className="aside-title">谁听这张唱片？</h4>
            <ul className="album-list">
            {this.state.collector.length > 1 &&
              this.state.collector.map(item => (
                <li className="clearfix" key={item.cover}>
                  <a href="" className="avatar">
                    <img src={item.cover} alt=""/>
                  </a>
                  <div className="info">
                    <a href="">{item.listener}</a>
                    <div className="stars">
                      {item.listenTime}
                      <Rate disabled defaultValue={item.stars / 10 } style={{fontSize: '12px', marginRight: '3px'}}/>
                    </div>
                    {/* <p></p> */}
                  </div>
                </li>
              ))
            }
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Subject
