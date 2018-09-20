import React, { Component } from 'react'
import { Carousel } from 'antd'
import api from '@/api'

class Swipper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sliderImgs: []
    }
  }
  componentDidMount () {
    api.getTopBannerImgs().then(res => {
      this.setState({
        sliderImgs: res.imgList
      })
    })
  }
  afterChange (e) {
    // console.log(e)
  }
  render () {
    return (
      <Carousel
        className="slick-slider"
        style={{height: 250}}
        autoplay="true"
        afterChange={this.afterChange.bind(this)}
      >
        {
          this.state.sliderImgs.map((item, index) =>
            <div key={index}>
              <img src={item} alt={index}/>
            </div>
          )
        }
      </Carousel>
    )
  }
}

export default Swipper
