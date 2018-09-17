import React, { Component } from 'react'
import { Input, Popover } from 'antd'
import { Link } from 'react-router-dom'
import 'styles/navBar.scss'
// import navLogoImg from ''

const appContent = (
  <div>
    <p>Content</p>
  </div>
)

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: 'home',
      navItems: [
        {
          name: '豆瓣',
          path: '/home'
        },{
          name: '读书',
          path: '/study'
        },{
          name: '电影',
          path: '/film'
        },{
          name: '音乐',
          path: '/music'
        },{
          name: '同城',
          path: '/local'
        },{
          name: '小组',
          path: '/group'
        },{
          name: '阅读',
          path: '/reading'
        },{
          name: 'FM',
          path: '/fm'
        },{
          name: '时间',
          path: '/404'
        },{
          name: '豆品',
          path: '/todo'
        },{
          name: '更多',
          path: '/more'
        },
      ],
      navSecondItems: [
        {
          name: '音乐人',
          path: 'musician'
        }, {
          name: '排行榜',
          path: '/'
        }, {
          name: '分类浏览',
          path: '/classify'
        }, {
          name:'乐评',
          path: '/reviews'
        }, {
          name: '歌单',
          path: '/songlist'
        }
      ]
    }
  }
  render () {
    return (
      <nav className="app-nav">
        <div className="app-nav-bd">
          <div className="nav-items">
            <ul>
              {
                this.state.navItems.map((nav, index) =>
                  <li key={index}><Link to={nav.path}>{nav.name}</Link></li>
                )
              }
            </ul>
          </div>
          <div className="nav-others">
            <div className="nav-doubanapp">
              <Link to="/doubanapp">下载豆瓣客户端</Link>
            </div>
            <div className="nav-info">
              <Link to="/login">登录</Link>
              <Link to="/register">注册</Link>
            </div>
          </div>
        </div>
        <div className="app-nav-search">
          <div className="nav-wrap">
            <div className="nav-logo">
              <Popover content={appContent} placement="bottom" title="5465">
                <Link to="/">豆瓣音乐</Link>
              </Popover>
            </div>
            <div className="nav-search">
            <Input.Search
              placeholder="唱片名、表演者、条码、ISRC"
              enterButton
              style={{width: 500}}
              onSearch={value => console.log(value)}
            />
            </div>
          </div>
        </div>
        <div className="app-nav-secondary">
          <div className="nav-wrap">
            <ul>
              {
                this.state.navSecondItems.map((item, index) =>
                  <li key={index}><Link to={item.path}>{item.name}</Link></li>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
