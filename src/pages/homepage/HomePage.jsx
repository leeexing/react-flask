import React, { Component } from 'react'
import { Row, Col } from 'antd'
import SlickSlider from './SlickSlider'
import InfoCard from './InfoCard'
import HotMusician from './HotMusician'
import PopularArtist from './PopularArtist'
import { WeekTop10, Douban250, EditorFeature } from './view.js'
import 'styles/homePage.less'
import store from '@/store'
// import api from '@/api'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reactData: []
    }
  }
  componentDidMount () {
    console.log('hello, react')
    console.log(store.getState())
    // api.getPopularSongs().then(res => {
    //   console.log(res)
    //   this.setState({
    //     reactData: res.reactRenderData
    //   })
    // })
  }
  render () {
    const hotSongs = this.state.reactData[2]
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
              <WeekTop10 hotSongs={hotSongs}/>
              <Douban250/>
            </aside>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
