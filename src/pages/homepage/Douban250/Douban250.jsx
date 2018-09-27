import React, { Component } from 'react'
import SubHeader from "components/SubHeader/SubHeader"

class leeing extends Component {
  render () {
    return (
      <div className="douban-songs">
        <SubHeader
          headerText="豆瓣音乐250"
          more
          style={{marginBottom:'10px'}}
        />
        <ul className="content">
          {this.props.doubanMusic250.map((item, index) =>
              <li key={index}>
                <a href="">
                  <img src={item.cover} alt=""/>
                </a>
                <p>
                  <a href="music-name">{item.name}</a>
                </p>
              </li>
            )}
        </ul>
      </div>
    )
  }
}

export default leeing
