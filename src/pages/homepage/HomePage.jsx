import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SlickSlider from './SlickSlider'
import InfoCard from './InfoCard'
import HotMusician from './HotMusician'
import PopularArtist from './PopularArtist'
import { WeekTop10, Douban250, EditorFeature } from './view.js'
import 'styles/homePage.less'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount () {
    console.log('hello, react')
  }
  render () {
    return (
      <div className="app-home">
        <Row gutter={16}>
          <Col span={16} className="article">
            <SlickSlider/>
            <PopularArtist/>
            <EditorFeature/>
          </Col>
          <Col span={8} className="aside">
            <aside>
              <InfoCard/>
              <HotMusician/>
              <WeekTop10/>
              <Douban250/>
            </aside>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
