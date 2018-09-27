import React, { Component } from 'react'
import { Carousel } from 'antd'

class Swipper extends Component {
  render () {
    return (
      <Carousel
        className="slick-slider"
        style={{height: 250}}
        autoplay="true"
      >
        {
          this.props.bannerImgs.map((item, index) =>
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
