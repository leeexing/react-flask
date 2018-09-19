import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SlickSlider from './SlickSlider'
import InfoCard from './InfoCard'
import HotMusician from './HotMusician'
import PopularArtist from './PopularArtist'
import {Top10} from './view.js'
import 'styles/homePage.less'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sliderImgs: [
        'https://cn.bing.com/az/hprichbg/rb/RedMapleQue_ZH-CN8685756305_1920x1080.jpg',
        'https://cn.bing.com/az/hprichbg/rb/MonumentFountain_ZH-CN12137557720_1920x1080.jpg',
        'https://cn.bing.com/az/hprichbg/rb/BlackCuillin_ZH-CN10048970076_1920x1080.jpg',
        'https://cn.bing.com/az/hprichbg/rb/GustavKlimt_ZH-CN9730106413_1920x1080.jpg',
      ]
    }
  }
  render () {
    return (
      <div className="app-home">
        <Row gutter={16}>
          <Col span={16} className="article">
            <SlickSlider sliderImgs={this.state.sliderImgs}/>
            <PopularArtist/>
          </Col>
          <Col span={8} className="aside">
            <aside>
              <InfoCard/>
              <HotMusician/>
              <Top10/>
            </aside>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
