import React, { Component } from 'react'
import { Row, Col, Input, Skeleton } from 'antd'
import api from '@/api'
import 'styles/tags.less'

class Leeing extends Component {
  constructor () {
    super()
    this.state = {
      tagsList: []
    }
  }
  componentDidMount () {
    api.getTagsData().then(res => {
      console.log(res)
      this.setState({
        tagsList: res.data
      })
    })
  }
  render () {
    return (
      <div className="app-home tag">
        <h1 className="tag-title">豆瓣音乐标签</h1>
        <Row gutter={16}>
          <Col span={16}>
            <div className="tag-classify">
              <span className="scan active">分类浏览</span>
              <b className="division">/</b>
              <span className="hot">所有热门标签</span>
            </div>
            {this.state.tagsList.length < 1
              ? <Skeleton/>
              : this.state.tagsList.map(tag => (
                <div className="tag-mod" key={tag.title}>
                  <h2>{tag.title}</h2>
                  <ul className="tag-list">
                  {tag.content.map((item, index) => (
                      <li className="tag-item" key={index}>
                        <a href="">{item.name}</a>
                        <span>({item.number})</span>
                      </li>
                    ))
                  }
                  </ul>
                </div>
              ))
            }
            {/* <div className="tag-mod">
              <h2>风格......</h2>
              <ul className="tag-list">
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
                <li className="tag-item">
                  <a href="">OST</a>
                  <span>(129782)</span>
                </li>
              </ul>
            </div>
            <div className="tag-mod">
              <h2>国家/地区......</h2>
              <ul className="tag-list">
              </ul>
            </div>
            <div className="tag-mod">
              <h2>艺术家......</h2>
              <ul className="tag-list">
              </ul>
            </div> */}
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
