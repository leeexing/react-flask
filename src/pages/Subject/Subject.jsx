import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Rate, Skeleton } from 'antd'
import api from '@/api'
import 'styles/subject.less'

const subjectHeader = data =>
  data.map(item => (
    <div className="subject-header">
      <div className="intro">
        <a href="" className="cover">
          <img src="https://img1.doubanio.com/view/subject/m/public/s29798769.jpg" alt=""/>
        </a>
        <div className="intro-list">
          <p>又名:</p>
          <p>表演者:</p>
          <p>流派:</p>
          <p>专辑类型:</p>
          <p>介质:</p>
          <p>发行时间:</p>
          <p>出版者:</p>
        </div>
      </div>
      <div className="score">
        <span>豆瓣评分</span>
        <div className="stars">
          <div className="num">5.7</div>
          <div>
            <Rate defaultValue={3} style={{fontSize: "12px"}}></Rate>
            <p className="p"><a href="">人评价</a></p>

          </div>
        </div>
        <p>5星</p>
        <p>4星</p>
        <p>3星</p>
        <p>2星</p>
        <p>1星</p>
      </div>
    </div>
  ))


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
      coverDetail: []
    }
  }
  componentDidMount () {
    let subjectId = this.props.match.params.subjectId
    api.getSubjectDetail(subjectId).then(res => {
      console.log(res)
      this.setState({
        hasData: true,
        title: res.data.title,
        ...res.data.aside,
        ...res.data.article
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
            <div className="subject-header">
              <div className="intro">
                <a href="" className="cover">
                  <img src="https://img1.doubanio.com/view/subject/m/public/s29798769.jpg" alt=""/>
                </a>
                <div className="intro-list">
                  <p>又名:</p>
                  <p>表演者:</p>
                  <p>流派:</p>
                  <p>专辑类型:</p>
                  <p>介质:</p>
                  <p>发行时间:</p>
                  <p>出版者:</p>
                </div>
              </div>
              <div className="score">
                <span>豆瓣评分</span>
                <div className="stars">
                  <div className="num">5.7</div>
                  <div>
                    <Rate defaultValue={3} style={{fontSize: "12px"}}></Rate>
                    <p className="p"><a href="">人评价</a></p>

                  </div>
                </div>
                <p>5星</p>
                <p>4星</p>
                <p>3星</p>
                <p>2星</p>
                <p>1星</p>
              </div>
            </div>
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
