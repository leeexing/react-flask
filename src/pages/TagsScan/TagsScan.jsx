import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Skeleton } from 'antd'
import api from '@/api'
import 'styles/tags.less'

class Leeing extends Component {
  constructor () {
    super()
    this.state = {
      scanType: 'normal',
      normalTags: [],
      hotTags: [],
      tagsList: []
    }
  }
  componentDidMount () {
    api.getTagsData().then(res => {
      console.log(res)
      this.setState({
        normalTags: res.data
      })
    })
  }
  changeScanType (type) {
    if (this.state.scanType === type) {
      return
    }
    if (type === 'hot') {
      if (this.state.hotTags.length < 1) {
        api.getTagsHotData().then(res => {
          console.log(res)
          this.setState({
            hotTags: res.data,
            scanType: 'hot'
          })
        })
        return
      }
    }
    this.setState({
      scanType: type
    })
  }
  skipToTagDetail (tagName) {

  }
  render () {
    let tagList = this.state.scanType === 'normal' ? this.state.normalTags : this.state.hotTags
    return (
      <div className="app-home tag">
        <h1 className="tag-title">豆瓣音乐标签</h1>
        <Row gutter={16}>
          <Col span={16}>
            <div className="tag-classify">
              <span className="scan active" onClick={this.changeScanType.bind(this, 'normal')}>分类浏览</span>
              <b className="division">/</b>
              <span className="hot" onClick={this.changeScanType.bind(this, 'hot')}>所有热门标签</span>
            </div>
            {tagList.length < 1
              ? <Skeleton/>
              : this.state.scanType === 'normal'
              ? tagList.map(tag => (
                  <div className="tag-mod" key={tag.title}>
                    <h2>{tag.title}</h2>
                    <ul className="tag-list">
                    {tag.content.map((item, index) => (
                        <li className="tag-item" key={index}>
                          <Link className="a" to={`/tag/${item.name}`}>{item.name}</Link>
                          {/* <Link onClick={this.skipToTagDetail.bind(this, item.name)}>{item.name}</Link> */}
                          <span>({item.number})</span>
                        </li>
                      ))
                    }
                    </ul>
                  </div>
                ))
              : <div className="tag-mod">
                  <ul className="tag-list">
                    {tagList.map((item, index) => (
                        <li className="tag-item" key={index}>
                          <Link className="a" to={`/tag/${item.name}`}>{item.name}</Link>
                          {/* <a href="" onClick={this.skipToTagDetail.bind(this, item.name)}>{item.name}</a> */}
                          <span>({item.number})</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
            }
          </Col>
          <Col span={8} style={{paddingLeft: "50px"}}>
            <h2> 标签直达 ......</h2>
            <Input.Search
              placeholder="去其他标签"
              enterButton="进入"
              size="small"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Leeing
