import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Skeleton, Rate, Pagination } from 'antd'
import api from '@/api'
import 'styles/tags.less'

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>前页</a>
  } if (type === 'next') {
    return <a>后页</a>
  }
  return originalElement
}

class TagDetail
 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tagName: '',
      tagsRelated: [],
      tagDetailList: [],
      fetchType: 'T',
      page: 1,
      total: 0,
    }
  }
  componentDidMount () {
    let tagName = this.props.match.params.tagName
    this.setState({ tagName })
    this.fetchTagDetail()
    api.getTagRelated(tagName).then(res => {
      this.setState({
        tagsRelated: res.data
      })
    })
  }
  changeScanType (fetchType) {
    this.setState({
      fetchType
    }, () => {
      this.fetchTagDetail()
    })
  }
  onChangePage (page) {
    this.setState({
      page
    }, () => {
      this.fetchTagDetail()
    })
  }
  fetchTagDetail () {
    let tagName = this.props.match.params.tagName
    let start = (this.state.page - 1) * 20
    let data = {
      type: this.state.fetchType,
      start
    }
    api.getTagDetail(tagName, data).then(res => {
      console.log(res)
      this.setState({
        tagDetailList: res.data.detailItems,
        total: res.data.total
      })
    })
  }
  render () {
    let tagList = this.state.tagDetailList
    return (
      <div className="app-home tag">
        <h1 className="tag-title">豆瓣音乐标签: {this.state.tagName}</h1>
        <Row gutter={16}>
          <Col span={16}>
            <div className="tag-classify dashed">
              <span className="scan active" onClick={this.changeScanType.bind(this, 'T')}>综合排序</span>
              <b className="division">/</b>
              <span className="hot" onClick={this.changeScanType.bind(this, 'S')}>评分排序</span>
              <b className="division">/</b>
              <span className="hot" onClick={this.changeScanType.bind(this, 'R')}>日期排序</span>
              <b className="division">/</b>
              <span className="hot" onClick={this.changeScanType.bind(this, 'O')}>标注次数排序</span>
            </div>
            <ul className="tag-detail-list">
            {tagList.length < 1
              ? <Skeleton/>
              : tagList.map(item => (
                  <li className="detail-item" key={item.href}>
                    <div className="avatar">
                      <img src={item.avatar} alt=""/>
                    </div>
                    <div className="info">
                      <Link className="a" to={`/subject/${item.subjectId}`}>
                        <h3>{item.title}  <span>{item.subTitle}</span>  </h3>
                      </Link>
                      <p className="content">{item.author}</p>
                      <div className="star">
                        <Rate allowHalf defaultValue={item.stars} disabled/>
                        <span className="score">{item.score}</span>
                        ({item.peopleNum}人评价)
                      </div>
                    </div>
                  </li>
                ))
            }
            </ul>
            {this.state.total < 1
              ? ''
              : <div className="tag-pagenation">
                  <Pagination onChange={this.onChangePage.bind(this)} total={this.state.total} itemRender={itemRender}/>
                </div>
            }
          </Col>
          <Col span={8} style={{paddingLeft: "50px"}}>
            <h2> 相关的标签 ......</h2>
            <div className="tag-related">
            {this.state.tagsRelated.map(item => (
                <Link className="a" to={item.href} key={item.href}>{item.tagName}</Link>
              ))
            }
            </div>
            <Input.Search
              placeholder="去其他标签"
              enterButton="进入"
              size="small"
              onSearch={value => console.log(value)}
            />
            <div className="tag-back">
              <span>></span>
              <Link to="/tags">浏览所有音乐标签</Link>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TagDetail

