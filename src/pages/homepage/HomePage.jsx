import React, { Component } from 'react'
import { Row, Col, Skeleton } from 'antd'
import { WeekTop10, Douban250, EditorFeature, NewAlbumList,
  PopularArtist, HotMusician, InfoCard, SlickSlider, HotProgramme } from './view.js'
import 'styles/homePage.less'
import store from '@/store'
import api from '@/api'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataLoaded: 0,
      bannerImgs: [],
      popularArtists: [],
      newArtists: [],
      editorFeatureSongs: [],
      doubanMusic250: [],
      joinInfo: [],
      newAlbumList: {},
      hotProgramme: {},
      weekTop10: {},
    }
  }
  componentDidMount () {
    console.log(store.getState())
    api.getHomePageData().then(res => {
      console.log(res)
      if (res.result) {
        this.setState({
          ...this.state,
          ...res.data
        })
        this.setState({
          dataLoaded: this.state.dataLoaded + 1
        })
      }
    })
    api.getHomeReactData().then(res => {
      if (res.result) {
        this.setState({
          ...this.state,
          ...res.data
        })
        this.setState({
          dataLoaded: this.state.dataLoaded + 1
        })
      }
    })
  }
  render () {
    return (
      <div className="app-home">
        {this.state.dataLoaded < 2
          ? <Row gutter={16}>
              <Col span={16}>
                <Skeleton active paragraph={{ rows: 8 }}/>
              </Col>
              <Col span={8}>
                <Skeleton active paragraph={{ rows: 6 }}/>
              </Col>
            </Row>
          : <Row gutter={16}>
              <Col span={16} className="article">
                <SlickSlider bannerImgs={this.state.bannerImgs}/>
                <PopularArtist popularArtists={this.state.popularArtists} newArtists={this.state.newArtists}/>
                <EditorFeature editorFeatureSongs={this.state.editorFeatureSongs}/>
                <NewAlbumList newAlbumList={this.state.newAlbumList}/>
                <HotProgramme hotProgramme={this.state.hotProgramme}/>
              </Col>
              <Col span={8} className="aside">
                <aside>
                  <InfoCard joinInfo={this.state.joinInfo}/>
                  <HotMusician/>
                  <WeekTop10 weekTop10={this.state.weekTop10}/>
                  <Douban250 doubanMusic250={this.state.doubanMusic250}/>
                </aside>
              </Col>
            </Row>
        }
      </div>
    )
  }
}

export default HomePage
