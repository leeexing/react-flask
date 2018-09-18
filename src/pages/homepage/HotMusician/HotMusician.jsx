import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class leeing extends Component {

  render () {
    const hotTags = ['流行', '轻音乐','摇滚','古典','电子','世界音乐','民谣','说唱','爵士','原声']
    return (
      <div className="hot-musician-tag">
        <div className="tag-header">
          热门音乐人分类
          <Link to="/more">更多</Link>
        </div>
        <ul className="tag-list">
          {
            hotTags.map((tag, index) =>
              <li key={index}>
                <Link to='/'>{tag}</Link>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default leeing
