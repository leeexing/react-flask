import React, { Component } from 'react'
import SubSection from "components/SubSection/SubSection"
import SubHeader from "components/SubHeader/SubHeader"
import api from '@/api'

class NewAlbumList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      hotProgrammes: {
        sections: []
      }
    }
  }
  componentDidMount () {
    api.getPopularSongs().then(res => {
      this.setState({
        hotProgrammes: res.reactRenderData[1]
      })
    })
  }
  handleSectionTitle (index) {
    this.setState({
      index
    })
  }
  render () {
    let hotProgrammes = this.state.hotProgrammes.sections[this.state.index]
    hotProgrammes = hotProgrammes ? hotProgrammes.programmes : []
    const titles = this.state.hotProgrammes.sections.map(item => item.title)
    return (
      <div className="hot-programmes">
        <SubHeader
          headerText="近期热门歌单"
          more="true"
        >
          <SubSection index={this.state.index} sectionTitles={titles} handleSectionTitle={this.handleSectionTitle.bind(this)}/>
        </SubHeader>
        <div className="content">
          <ul className="programme-content">
          {
            hotProgrammes.map((programme, index) => {
              return <li className="programme-item" key={index}>
                <div className="item-content">
                  <a className="cover">
                    <img src={programme.cover.replace('https://', 'https://images.weserv.nl/?url=')} alt=""/>
                  </a>
                  <div className="detail">
                    <h3>
                      <a href="">{programme.title}</a>
                      <span>({programme.songs_count})</span>
                    </h3>
                    <h4>
                      <a>{programme.creator.name}</a>
                      <span>制作 | {programme.collected_count} 收藏</span>
                    </h4>
                    <ul>
                      {
                        programme.songs.map((item, idx) =>
                          <li key={idx}>{item}</li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </li>

            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default NewAlbumList
