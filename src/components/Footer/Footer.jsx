import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render () {
    return (
      <footer className="app-footer">
        <div>© 2005－2018 douban.com, all rights reserved 北京豆网科技有限公司</div>
        <div>
          <Link>关于豆瓣</Link>
          <Link>在豆瓣工作</Link>
          <Link>联系我们</Link>
        </div>
      </footer>
    )
  }
}

export default Footer
