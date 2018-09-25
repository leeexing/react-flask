import React, { Component } from 'react'
import { Rate } from 'antd'
import SubSection from "components/SubSection/SubSection"
import SubHeader from "components/SubHeader/SubHeader"
import api from '@/api'

class NewAlbumList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      newAlbumLists: {
        sections: []
      }
    }
  }
  componentDidMount () {
    api.getPopularSongs().then(res => {
      this.setState({
        newAlbumLists: res.reactRenderData[0]
      })
    })
  }
  handleSectionTitle (index) {
    this.setState({
      index
    })
  }
  render () {
    let newAlbumLists = this.state.newAlbumLists.sections[this.state.index]
    newAlbumLists = newAlbumLists ? newAlbumLists.albums : []
    const titles = this.state.newAlbumLists.sections.map(item => item.title)
    return (
      <div className="new-albums">
        <SubHeader
          headerText="新碟榜"
          more="true"
        >
          <SubSection index={this.state.index} sectionTitles={titles} handleSectionTitle={this.handleSectionTitle.bind(this)}/>
        </SubHeader>
        <div className="content">
          <ul className="album-content">
          {
            newAlbumLists.map((album, index) => {
              return <li className="album-item" key={index}>
                <a href="" className="cover">
                  <img src={album.image.replace('https://', 'https://images.weserv.nl/?url=')} alt=""/>
                </a>
                <h3>
                  <a href="">{album.name}</a>
                </h3>
                <h4>{album.performers}</h4>
                <Rate disabled defaultValue={Number(album.averageRating[0]) * 0.5} style={{fontSize: 12}}></Rate>
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
